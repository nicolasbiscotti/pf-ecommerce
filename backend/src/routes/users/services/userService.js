const { User, OauthProfile, Op, conn } = require("../../../db");

const userService = {
  createUser: async ({
    username,
    password,
    firstName,
    lastName,
    email,
    type,
  }) => {
    try {
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email }, { username }],
        },
      });
      if (existingUser) {
        return [existingUser, false];
      } else {
        const user = await User.create({
          username,
          password,
          firstName,
          lastName,
          email,
          type,
        });
        return [user, true];
      }
    } catch (error) {
      console.error(error);
    }
  },
  createSocialUser: async (username, email, oauthProfile) => {
    try {
      const { profileId, provider } = oauthProfile;
      const existingPrifile = await OauthProfile.findOne({
        where: {
          profileId,
          provider,
        },
      });
      if (existingPrifile) {
        return [existingPrifile, false];
      } else {
        const profile = await OauthProfile.create(
          {
            profileId,
            provider,
            User: {
              username,
              email,
            },
          },
          {
            include: [
              {
                association: OauthProfile.User,
              },
            ],
          }
        );
        return [profile, true];
      }
    } catch (error) {
      console.error(error);
    }
  },

  findUserByOauthProfile: async (profileId, provider) => {
    try {
      const oauthProfile = await OauthProfile.findOne({
        where: { profileId, provider },
        include: User,
      });
      return oauthProfile ? oauthProfile.User : false;
    } catch (error) {
      console.log(error);
    }
  },
  find: async (userId) => {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.error(error);
    }
  },
  pushOauthProfile: async (user, oauthProfile) => {
    try {
      const { profileId, provider } = oauthProfile;
      const profile = await OauthProfile.create({ profileId, provider });
      await user.addOauthProfile(profile);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = userService;
