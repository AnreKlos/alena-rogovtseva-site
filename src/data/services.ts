export interface Service {
  slug: string;
  name: string;
  price: string;
  description: string;
  category: 'lashes' | 'nails' | 'brows' | 'training';
  image: string;
}

export const services: Service[] = [
  {
    slug: 'classic',
    name: 'Классика (1Д)',
    price: '2 400 ₽',
    description: 'Одна искусственная ресничка на одну натуральную. Естественный эффект накрашенных ресниц.',
    category: 'lashes',
    image: '/assets/img/services/classic/classic.jfif',
  },
  {
    slug: '2d',
    name: '2Д наращивание',
    price: '2 800 ₽',
    description: 'Пучок из 2 ресниц на каждую натуральную. Яркий выразительный взгляд.',
    category: 'lashes',
    image: '/assets/img/services/2d/2d.jfif',
  },
  {
    slug: '3d',
    name: '3Д наращивание',
    price: '3 000 ₽',
    description: 'Пучок из 3 ресниц. Максимальный объём и роскошь.',
    category: 'lashes',
    image: '/assets/img/services/3d/3d.png',
  },
  {
    slug: 'led',
    name: 'ЛЭД наращивание',
    price: '3 000 ₽',
    description: 'LED-клей минимизирует пары — подходит для чувствительных глаз.',
    category: 'lashes',
    image: '/assets/img/services/led/led.jfif',
  },
  {
    slug: 'lamination',
    name: 'Ламинирование ресниц',
    price: '2 400 ₽',
    description: 'Насыщение пигментом и микроэлементами. Тонкие ресницы выглядят роскошно.',
    category: 'lashes',
    image: '/assets/img/services/lamination/lamination.jfif',
  },
  {
    slug: 'wet-effect',
    name: 'Мокрый эффект',
    price: '3 000 ₽',
    description: 'Стильный тренд — ресницы выглядят как после воды, с лёгкой склейкой.',
    category: 'lashes',
    image: '/assets/img/services/wet-effect/wet-effect.jfif',
  },
  {
    slug: 'manicure-hygiene',
    name: 'Маникюр гигиенический',
    price: '1 300 ₽',
    description: 'Форма, комбинированная техника, покрытие лаком, массаж рук.',
    category: 'nails',
    image: '/assets/img/services/manicure-hygiene/manicure-hygiene.jfif',
  },
  {
    slug: 'japanese-manicure',
    name: 'Японский маникюр',
    price: '1 700 ₽',
    description: 'Натуральные компоненты, акцент на здоровье ногтей и естественную красоту.',
    category: 'nails',
    image: '/assets/img/services/japanese-manicure/japanese-manicure.jfif',
  },
  {
    slug: 'manicure-gel',
    name: 'Маникюр + гель-лак',
    price: '2 500 ₽',
    description: 'Снятие, форма, укрепление, покрытие гель-лаком, массаж рук.',
    category: 'nails',
    image: '/assets/img/services/manicure-gel/manicure-gel.jfif',
  },
  {
    slug: 'pedicure-hygiene',
    name: 'Педикюр гигиенический',
    price: '2 200 ₽',
    description: 'Снятие гель-лака, форма, smart-обработка стопы, покрытие лаком.',
    category: 'nails',
    image: '/assets/img/services/pedicure-hygiene/pedicure-hygiene.jfif',
  },
  {
    slug: 'pedicure-gel',
    name: 'Педикюр + гель-лак',
    price: '2 800 ₽',
    description: 'Полная обработка стопы, укрепление, покрытие гель-лаком, дизайн 2х ногтей.',
    category: 'nails',
    image: '/assets/img/services/pedicure-gel/pedicure-gel.jfif',
  },
  {
    slug: 'brows',
    name: 'Коррекция/окрашивание бровей',
    price: '1 500 ₽',
    description: 'Моделирование формы воском и пинцетом, окрашивание стойкой краской.',
    category: 'brows',
    image: '/assets/img/services/brows/brows.jfif',
  },
  {
    slug: 'makeup',
    name: 'Макияж',
    price: '3 000 ₽',
    description: 'Для любого события: свадьба, фотосессия, вечеринка. Люксовая косметика.',
    category: 'brows',
    image: '/assets/img/services/makeup/photo.jpg',
  },
  {
    slug: 'training',
    name: 'Обучение наращиванию ресниц',
    price: 'По запросу',
    description: 'Индивидуальный курс: теория + практика на моделях. Поддержка после обучения.',
    category: 'training',
    image: '/assets/img/services/training/training.webp',
  },
];
