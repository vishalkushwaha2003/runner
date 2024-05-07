import User from "../model/user.js";

export const login = async (req, res) => {
  try {
    const { userName, profilePic } = req.body;
    console.log(userName)
    const user = await User.findOne({ userName });
   

    if (!user) {
      const newUser = new User({
        userName,
        profilePic,
      });

      if (newUser) {
        await newUser.save();
        res.status(201).json({
          _id: newUser._id,
          userName: newUser.userName,
          profilePic: newUser.profilePic,
        });
      } else res.status(400).json({ error: "user creation failed" });
    }

    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in login ", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
