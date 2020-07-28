import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [active, setActive] = React.useState(false);

    function handleClick(event) {
        setActive(true);
        event.preventDefault();
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {active ? (
                    <input
                        name="title"
                        onChange={handleChange}
                        autoComplete="off"
                        value={note.title}
                        placeholder="Title"
                    />
                ) : null}

                <textarea
                    name="content"
                    onClick={handleClick}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={active ? "3" : "1"}
                />
                {active ? (
                    <Zoom in={true}>
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                ) : null}
            </form>
        </div>
    );
}

export default CreateArea;
