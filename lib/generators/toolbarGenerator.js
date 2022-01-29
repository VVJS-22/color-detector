export const tools = [
    {
        id: 1,
        icon: '/assets/icons/addImage.svg',
        label: 'Add Image',
        input: {
            type: "file",
            accept: "image/*",
            name: "img",
            id: "img",
            style: {display: 'none'},
        }
    },
    {
        id: 2,
        icon: '/assets/icons/camera.svg',
        label: 'camera',
        input: {
            type: "number",
            accept: "image/*",
            name: "camera",
            id: "camera",
            camera: "user",
        }
    },
    {
        id: 3,
        icon: '/assets/icons/process.svg',
        label: 'process',
        input: {
            type: "submit",
            name: "camera",
            id: "camera",
            style: {display: 'none'},
        }
    },
]

export const paletteOptions = [
    {
        id: 5,
        label: '🤓 UI Expert', 
        n: 5
    },
    {
        id: 6,
        label: '🕵️‍♂️ Perfect Detector', 
        n: 20
    },
    {
        id: 7,
        label: '👨‍🔬 Palette Researcher', 
        n: 50,
    },
    {
        id: 8,
        label: '🎇 Palette Wala',  
        n: 200
    },
]