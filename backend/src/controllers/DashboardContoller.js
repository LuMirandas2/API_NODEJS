import House from "../models/House";

class DashboardContoller {
    async show(req, res) {
      const { user_id } = req.headers;
      const houses = await House.find({ user: user_id });
      return res.json(houses);
    }
}

export default new DashboardContoller();