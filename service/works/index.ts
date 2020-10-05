import express from 'express';
import {Work} from "./../database/work.model"
export const router = express.Router();

router.get('/', (req, res) => {
    res.send('get associates Service');
});


router.post('/', async (req, res) => {
    await Work.create({
        id: "Johnny",
        name: "John",
        createDate:new Date("2019-01-16"),
        lastModifiedDate:new Date("2019-01-16")
      });
    res.send('post associates Service');
});

router.delete('/:id', (req, res) => {
    res.send('delete associate Service');
});

router.put('/:id', (req, res) => {
    res.send('update associate Service');
});

 