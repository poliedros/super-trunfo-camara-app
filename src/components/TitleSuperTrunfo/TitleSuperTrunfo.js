import React from "react";

const TitleSuperTrunfo = () => {
    return (
        <div>
            <div style={{ marginBottom: "-15px" }}>
                <p
                    className="superTrunfo half-color"
                    style={{ color: "white", fontSize: "40px" }}
                >
                    {" "}
                    SUPER{" "}
                </p>{" "}
                <span
                    className="superTrunfo"
                    style={{ color: "white", fontSize: "40px" }}
                >
                    TR
                </span>
                <span className="superTrunfo half-color" attribute="U">
                    U
                </span>
                <span className="superTrunfo half-color3" attribute="N">
                    N
                </span>
                <span
                    className="superTrunfo half-color4"
                    attribute="F"
                    style={{ color: "#d9d9d9", fontSize: "40px" }}
                >
                    F
                </span>
                <span className="superTrunfo half-color2" attribute="O">
                    O
                </span>
            </div>
            <h5
                style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                }}
                className="osPoliticos"
            >
                os Políticos
            </h5>
        </div>
    );
};

export default TitleSuperTrunfo;