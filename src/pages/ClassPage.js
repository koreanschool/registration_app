import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import useAuth from '../hooks/useAuth';
import Constants from '../constants';
import { Container, Button, Row, Col } from 'react-bootstrap';
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw, convertFromHTML } from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ClassPage = (props) => {
    const className = props.className;
    const [user, loading] = useAuth();
    const [toggle, setToggle] = useState(false); 
    const [classContent, setClassContent] = useState(
        EditorState.createEmpty()
    );
    const [HTMLContent, setHTMLContent] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [errorSaving, setErrorSaving] = useState("");

    useEffect(() => {
        const notebookRef = firebase
            .database()
            .ref(`${className}/${Constants.year}`);
        notebookRef.on("value", snap => {
            const firebaseData = snap.val() || { content: "" };
            console.log(firebaseData);

            const { content } = firebaseData;
            // default editor state to empty
            console.log(content);
            let editorState = EditorState.createEmpty();
            const { contentBlocks, entityMap } = convertFromHTML(content);

            if (contentBlocks) {
                // boilerplate code to generate the editor state from a string
                // then store it into state
                const contentState = ContentState.createFromBlockArray(
                    contentBlocks,
                    entityMap
                );
                // replace default editor state with actual state
                editorState = EditorState.createWithContent(contentState);
            }
            setClassContent(editorState);
            setHTMLContent(content);
            //setLoading(false);
        });

        return () => {
            notebookRef.off();
        };
    }, [className]);

    const sendClassContentToFirebase = async () => {
        try {
            setIsSaving(true);
            let convertedToHtml = draftToHtml(
                convertToRaw(classContent.getCurrentContent())
            );            
            console.log(convertedToHtml);
            const notebookRef = firebase
                .database()
                .ref(`${className}/${Constants.year}`);
            //let lastEditedTime = firebase.database.ServerValue.TIMESTAMP;
            const valueToSet = {
                content: convertedToHtml,
            }
            await notebookRef.set(valueToSet).then(() => {
                setIsSaving(false);
            });
            setErrorSaving("");
            //setSavedLatestDataToFirebase(true);
        } catch (e) {
            console.log(e);
            setIsSaving(false);
            setErrorSaving(e.message);
        }
    };
    const onChange = () => {
        const contentState = classContent.getCurrentContent();
        //console.log('content state', convertToRaw(contentState));
    }
  return (
    <Row>
        <Col><h2 style={{float:'left'}}>{className}</h2></Col>
        {
            user&&user.email === "sakks10@gmail.com" ? 
            <Col>
                <Button variant="outline-warning" disabled={toggle} style={{float:'right'}}
                    onClick={ e => setToggle(!toggle)}>&#9998;</Button>
            </Col>
            : undefined
        }
        { toggle ? 
            <Container> 
                <Editor
                editorState={classContent}
                onEditorStateChange={e => {
                    // if (savedLatestDataToFirebase) {
                    //     setSavedLatestDataToFirebase(false);
                    // }
                    setClassContent(e);
                    onChange()
                }}
                toolbar={{
                    options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "list",
                        "textAlign",
                        "colorPicker",
                        "link",
                        "embedded",
                        "emoji",
                        "remove",
                        "history"
                    ],
                    }}
                />
                <Button variant="warning" 
                    onClick={ e => {
                    sendClassContentToFirebase()
                    setToggle(!toggle)}}>
                    {isSaving ? "Saving..." : "Save" }</Button>
                <p>{errorSaving}</p>
            </Container>
            : 
            <Container><div dangerouslySetInnerHTML={{ __html: HTMLContent }} /></Container>
        }
    </Row>
  )
}

export default ClassPage;