const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
require('dotenv').config();

app.use(cors());

app.get("/:user", async (req, res) => {
    const { user } = req.params;
    try {
        if (user) {
            let info = await axios(`https://torre.bio/api/bios/${user}`);
            let strengths = {
                master: [],
                expert: [],
                proficient: [],
                novice: [],
                interested: []
            };
            info.data.strengths.map(strength => {
                switch (strength.proficiency) {
                    case "master":
                        strengths.master = [...strengths.master, strength.name+"_"+strength.weight+"_"+strength.recommendations]
                        break;
                    case "expert":
                        strengths.expert = [...strengths.expert, strength.name+"_"+strength.weight+"_"+strength.recommendations]

                        break;
                    case "proficient":
                        strengths.proficient = [...strengths.proficient, strength.name+"_"+strength.weight+"_"+strength.recommendations]

                        break;
                    case "novice":
                        strengths.novice = [...strengths.novice, strength.name+"_"+strength.weight+"_"+strength.recommendations]

                        break;
                    case "no-experience-interested":
                        strengths.interested = [...strengths.interested, strength.name+"_"+strength.weight+"_"+strength.recommendations]

                        break;
                }
            })
            res.send({
                name: info.data.person.name,
                img: info.data.person.pictureThumbnail,
                strengths
            });
        }
    } catch (error) {
        res.status(401).send(error)
    }

})

app.listen(process.env.PORT, () => console.log("Listening at port 3001"));