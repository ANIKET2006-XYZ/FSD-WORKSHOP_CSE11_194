import fs from "node:fs/promises";

const filePath = "userData.json";

// CREATE JSON FILE
async function createFile() {
    try {
        const data = {
            users: [
                {
                    id: 1,
                    name: "Aniket",
                    age: 20,
                    course: "CSE"
                }
            ]
        };

        await fs.writeFile(
            filePath,
            JSON.stringify(data, null, 2),
            "utf-8"
        );

        console.log("JSON File Created Successfully");
    }
    catch (err) {
        console.log("Error found:", err);
    }
}

// READ JSON FILE
async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf-8");

        const jsonData = JSON.parse(data);

        console.log("File Data:");
        console.log(jsonData);

        console.log("JSON File Read Successfully");
    }
    catch (err) {
        console.log("Error found:", err);
    }
}

// APPEND DATA TO JSON FILE
async function appendFile() {
    try {
        const data = await fs.readFile(filePath, "utf-8");

        const jsonData = JSON.parse(data);

        jsonData.users.push({
            id: 2,
            name: "Rahul",
            age: 21,
            course: "CSE"
        });

        await fs.writeFile(
            filePath,
            JSON.stringify(jsonData, null, 2),
            "utf-8"
        );

        console.log("Data Appended Successfully");
    }
    catch (err) {
        console.log("Error found:", err);
    }
}

// DELETE JSON FILE
async function deleteFile() {
    try {
        await fs.unlink(filePath);

        console.log("JSON File Deleted Successfully");
    }
    catch (err) {
        console.log("Error found:", err);
    }
}

// EXECUTE FUNCTIONS
async function sequence() {
    await createFile();
    await appendFile();
    await readFile();

    // Uncomment the line below if you want to delete the file
    // await deleteFile();
}

sequence();