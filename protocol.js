function generateProtocol(child,pastSessions){
    let frameObjects;
    let frameSequence;
    const BASE_DIR =  "https://raw.githubusercontent.com/ArmaniDilbo/RecursiveOrdinalsLookit/main/";

    const trailArrayTemplates = [
        // one level array on index 0
        [
        { "id" : "position1", "src": "", "left": 10, "top": 33, "width" : 12},
        { "id" : "position2", "src": "", "left": 27, "top": 33, "width" : 12},
        { "id" : "position3", "src": "", "left": 44, "top": 33, "width" : 12},
        { "id" : "position4", "src": "", "left": 61, "top": 33, "width" : 12},
        { "id" : "position5", "src": "", "left": 78, "top": 33, "width" : 12}
        ],
        // two level array on index 1
        [
            // fill here later
        ]



    ]

    // given some array of img objects, change the src to all the same type.  
    // img parameter must be a string
    function addImgToTemplateArray(img, template) {
        return template.map(obj => ({ ...obj, src: `${img}.png` }));
    }

    function createIntroFrames(){

    }

    function createOneLevelFrames(){

    }

    function createTwoLevelFrames(){

    }

    function createTrialFrame(img,audio,array_size){
        return {
        "kind": "exp-lookit-images-audio",
        "images": addImgToTemplateArray(img,trailArrayTemplates[array_size - 1]),
        "baseDir": BASE_DIR,
        "autoProceed": false,
        "doRecording": false,
        "maximizeDisplay": true,
        "showCursor": true,
        };


    }

    frameObjects["test"] = createTrialFrames("cow","Rec_01",1);
    frameSequence.push("test");

    return {
        frames : frameObjects,
        sequence : frameSequence
    };
}   