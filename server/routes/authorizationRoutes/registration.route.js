const router = require('express').Router();
const { Client } = require('../../db/models');
const { Lawyer } = require('../../db/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/',async (req, res) => {
  try{
    const {
      firstname,
      lastname,
      fathersname,
      email,
      password,
      city,
      rating,
      select // ?? Выбор роли, Юрист либо Клиент
    } = req.body;

    const hashPassword = await bcrypt.hash(password, saltRounds);
    const client = Client.findOne({ where: { email } });
    const lawyer = Lawyer.findOne({ where: { email } });

    if (password.length < 8) {
      res.status(400).json({ message: 'Пароль должен содержать не менее 8 символов' });
    } else if (!client && !lawyer && password >= 8) {
      if (select === 'Юрист') { // Изменить Юрист на то что придет с формы
        await Lawyer.create({
          firstname,
          lastname,
          fathersname,
          email,
          password: hashPassword,
          city,
          rating,
        });
        res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    } else {
      await Client.create({
        firstname,
        lastname,
        fathersname,
        email,
        password: hashPassword,
        city,
        rating,
      });
      res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
    }
    } else {
      res.status(400).json({ message: 'Пользователь с таким email уже зарегистрирован' });
    };
  }
  catch (error) {
    res.status(400).json({ message: 'Ошибка при регистрации' });
  }
});

module.exports = router;

