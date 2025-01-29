import { exec } from 'child_process';
import path from 'path';

// Define paths
const rhubarbDir = "C:/TFN data/3D_AI_website/r3f-lipsync-tutorial-main/Rhubarb-Lip-Sync"; // Rhubarb directory path
const inputAudio = "C:/TFN data/3D_AI_website/r3f-lipsync-tutorial-main/public/audios/sample_audio.ogg"; // Updated path for .ogg file
const outputJson = "C:/TFN data/3D_AI_website/r3f-lipsync-tutorial-main/public/audios/sample_audio.json"; // Output JSON file path

// Function to run Rhubarb Lip Sync
function runRhubarb(inputFile, outputFile) {
    const command = `cd "${rhubarbDir}" && rhubarb.exe -f json "${inputFile}" -o "${outputFile}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running Rhubarb: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Rhubarb stderr: ${stderr}`);
        }
        console.log(`Lip sync JSON generated: ${outputFile}`);
    });
}

// Run the conversion
runRhubarb(inputAudio, outputJson);
