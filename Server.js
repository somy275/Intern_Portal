import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import fs from "fs"
import { log } from "console";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
const internData = {
    name: 'Sahil Kumar',
    referrals: '7',
    donations: 15750,
    current_level: 2,
    Member: "05 Jul 2025",
    nextReward: "Platinum Badge"
};
const referalCode = "Sahil2075";
const leaderboardData = JSON.parse(fs.readFileSync("./leaderboard.json", "utf-8"));
app.get('/api/recent-activity', (req, res) => {
    const filePath = path.resolve('./Recent_Activity.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return res.json(JSON.parse(data));
});
app.get('/api/intern', (req, res) => {
    return res.json(internData)
});
app.get('/api/leaderboard', (req, res) => {
    const filePath = path.resolve('./leaderboard.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return res.json(JSON.parse(data));
});
app.get('/api/referalCode', (req, res) => {
    return res.json(referalCode);
});
app.get('/api/progress', (req, res) => {
    const progress = {
        "donations": 15750,
        "monthlyGoal": 20000,
    }
    app.get('/api/rewards', (req, res) => {
        const filePath = path.resolve('./Badges.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        return res.json(JSON.parse(data));
    })
    return res.json(progress);
}
)
app.listen(port, () => console.log(`Server is running on port ${port}`));