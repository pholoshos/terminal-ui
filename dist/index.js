require("./index.css");
var $bzML5$reactjsxruntime = require("react/jsx-runtime");
var $bzML5$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TerminalWindow", function () { return $eed3c407037d2183$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "TerminalLine", function () { return $8c758ace54455364$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "TerminalInput", function () { return $550178a853262415$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "TerminalStatusBar", function () { return $e0d6b132447760bc$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "CommandHistory", function () { return $ae95276ba5eba00c$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "TerminalOutput", function () { return $069d752482088070$export$2e2bcd8739ae039; });
// src/index.js

// src/components/TerminalWindow.js


const $eed3c407037d2183$var$TerminalWindow = ({ children: children, onClose: onClose = ()=>{}, onHide: onHide = ()=>{}, onExpand: onExpand = ()=>{} })=>{
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "border border-terminalText rounded-md p-4 max-w-4xl mx-auto my-4 bg-gray-900",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                className: "bg-terminalBg border-b border-terminalText text-terminalText p-2 rounded-t-md flex justify-between",
                children: [
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                        children: "Terminal"
                    }),
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                                onClick: onHide,
                                className: "mr-2",
                                children: "_"
                            }),
                            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                                onClick: onExpand,
                                className: "mr-2",
                                children: "\u25A1"
                            }),
                            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                                onClick: onClose,
                                children: "\u2715"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                className: "p-4",
                children: children
            })
        ]
    });
};
var $eed3c407037d2183$export$2e2bcd8739ae039 = $eed3c407037d2183$var$TerminalWindow;


// src/components/TerminalLine.js


const $8c758ace54455364$var$TerminalLine = ({ prompt: prompt, children: children })=>{
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "flex bg-gray-900",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                className: "text-terminalText",
                children: prompt
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                className: "ml-2 text-terminalText",
                children: children
            })
        ]
    });
};
var $8c758ace54455364$export$2e2bcd8739ae039 = $8c758ace54455364$var$TerminalLine;


// src/components/TerminalInput.js


const $550178a853262415$var$TerminalInput = ({ prompt: prompt, onSubmit: onSubmit })=>{
    const [input, setInput] = (0, $bzML5$react.useState)("");
    const handleChange = (e)=>setInput(e.target.value);
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            onSubmit(input);
            setInput(""); // Clear the input after submission
        }
    };
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "flex items-center bg-gray-900",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                className: "text-terminalText",
                children: prompt
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("input", {
                type: "text",
                value: input,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                className: "bg-transparent text-terminalText ml-2 focus:outline-none",
                autoFocus: true
            })
        ]
    });
};
var $550178a853262415$export$2e2bcd8739ae039 = $550178a853262415$var$TerminalInput;


// src/components/TerminalStatusBar.js


const $e0d6b132447760bc$var$TerminalStatusBar = ({ directory: directory = "~", status: status = "Normal Mode" })=>{
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: " border-t border-terminalText text-terminalText p-2 flex justify-between bg-gray-900",
        children: [
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                children: directory
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                children: status
            })
        ]
    });
};
var $e0d6b132447760bc$export$2e2bcd8739ae039 = $e0d6b132447760bc$var$TerminalStatusBar;


// src/components/CommandHistory.js


const $ae95276ba5eba00c$var$CommandHistory = ({ history: history })=>{
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "flex flex-col",
        children: history.map((item, index)=>/*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                                className: "text-terminalText",
                                children: item.prompt
                            }),
                            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("span", {
                                className: "ml-2 text-terminalText",
                                children: item.command
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
                        className: "text-terminalText ml-4",
                        children: item.output
                    })
                ]
            }, index))
    });
};
var $ae95276ba5eba00c$export$2e2bcd8739ae039 = $ae95276ba5eba00c$var$CommandHistory;


// src/components/TerminalOutput.js


const $069d752482088070$var$TerminalOutput = ({ output: output })=>{
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("div", {
        className: "text-terminalText ml-4 bg-gray-900",
        children: output
    });
};
var $069d752482088070$export$2e2bcd8739ae039 = $069d752482088070$var$TerminalOutput;




//# sourceMappingURL=index.js.map
