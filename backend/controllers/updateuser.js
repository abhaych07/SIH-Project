import { db } from "../prismaClient/prisma.js";


export const updateUser = async(req,res)=>{
     if (!req.auth || !req.auth.userId) {
    return res.status(401).send("Unauthorized");
  }

  const {clerkId} = req.auth.userId;

   const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  try {
   const { clerkId } = req.body;
    const {
      firstName,
      lastName,
      imageUrl,
      role,
      bio,
      expertise,
      experience,
      languages,
      newRating, 
    } = req.body;

    const updateData = {};

    if (firstName !== undefined) updateData.firstName = firstName;
    if (lastName !== undefined) updateData.lastName = lastName;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (role !== undefined) updateData.role = role;
    if (bio !== undefined) updateData.bio = bio;
    if (expertise !== undefined) updateData.expertise = expertise;
    if (experience !== undefined) updateData.experience = experience;
    if (languages !== undefined) updateData.languages = languages;

    if(newRating!==undefined){
        const user = await db.user.findUnique({
            where:{clerkId}
        })
        const updatedRatings = [...(user?.allrating||[]),newRating];
        updateData.allrating = updatedRatings;

         const avg =
        updatedRatings.reduce((sum, r) => sum + r, 0)

        updateData.avarageRating= parseFloat((avg.toFixed(2)));
    }

        const updatedUser = await db.user.update({
        where: { clerkId },
        data: updateData,
        });
    
        if(updatedUser!==null){
                    return res.status(200).json(updatedUser);
        }

        return res.status(400).json({errro:"User cannot be updated"})
  } catch (error) {
    res.status(500).json({error: error.message});
    console.log(error.message)
  }

}