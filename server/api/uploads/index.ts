// import { Router } from 'express';
// import multer from 'multer';
// import { PrismaClient } from '@prisma/client';
// import { PismaStorage } from 'multer-pisma-storage';

// const prisma = new PrismaClient();
// const upload = multer({
//   storage: new PismaStorage({
//     prisma,
//     destination: 'uploads/',
//     options: {
//       primaryKey: 'id',
//     },
//   }),
// });

// const router = Router();

// router.post('/', upload.single('file'), async (req, res) => {
//   try {
//     const { originalname, path } = req.file;

//     const uploadedFile = await prisma.file.create({
//       data: {
//         filename: originalname,
//         path,
//       },
//     });

//     res.status(200).json(uploadedFile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// export default router;
