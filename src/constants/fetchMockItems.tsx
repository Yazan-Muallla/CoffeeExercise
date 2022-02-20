import { Coffee } from '.'

import img from '../assets/Maskg.png'

// send all coffe params NO Partial
const makeCoffeeObject = ({
  id = '1',
  imageUrl = img
}: Partial<Coffee>): Coffee => ({
  id,
  name: 'Iced Coffee',
  description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.',
  createdAt: new Date(1995, 11, 17),
  updatedAt: new Date(1991, 11, 17),
  imageUrl: imageUrl
})

export const fetchMockItems = async (count: number): Promise<Coffee[]> => {
  const data = []

  for (let i = 0; i < count; i++) {
    data.push(makeCoffeeObject({ id: `${i}` }))
  }

  return Promise.resolve(data)
}
