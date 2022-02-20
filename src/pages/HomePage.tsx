import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


import { Button, ButtonVariant } from '../components/Atoms/Button'
import { Coffee } from '../constants'
import { FeaturedItemsSection } from '../components/FeaturedItemsSection'
import { deleteMutation, getCoffeesData } from '../api'
import { GridSection } from '../components/GridSection'
import { NavbarSection } from '../components/NavBarSection'
import { Toast } from '../components/Toast'

export const HomePage: React.FC = () => {
  let history = useHistory();
  const [deleted, setDeleted] = useState({})
  const [featuredItems, setFeaturedItems] = useState<Coffee[]>([])
  const [items, setItems] = useState<Coffee[]>([])
  const [showToast, setShowToast] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>('')


  const  fetchAllData = async () => {
    try {
      const data: Coffee[] = await getCoffeesData()
      setFeaturedItems(data.slice(0, 4))
      setItems(data)
    } catch (error: any) {
      setToastMessage(error.message)
      setShowToast(true)
    }
  }

  useEffect(() => {

    fetchAllData()
  }, [])

  useEffect(() => {
    if (showToast) {
      setTimeout(() => setShowToast(false), 3000)
    }
  }, [showToast])


  const onAddHandler = (): void => {
    history.push('/form')
  }

  const onDeleteHandler = async (): Promise<void> => {
    const ids = (Object.entries(deleted).filter(([key, val]) => val).map(([key]) => key))

    const promisees: Promise<void>[] = ids.map((id) => deleteMutation(id))
    await Promise.all(promisees)
    await fetchAllData()
  }

  return (
    <>
      <Toast message={toastMessage} show={showToast} />
      <div className="container">
        <div className="containerWidth">
          <NavbarSection />
          {featuredItems.length && <FeaturedItemsSection featuredItems={featuredItems} />}
        </div>
        <div className="buttonContaner">
          <Button clickHandler={onAddHandler} variant={ButtonVariant.Add} buttonName="Add" />
          <Button clickHandler={onDeleteHandler} variant={ButtonVariant.Delete} buttonName="Delete" />
        </div>
      </div>
      <GridSection items={items} setDeleted={setDeleted} deleted={deleted} />
    </>
  )
}
