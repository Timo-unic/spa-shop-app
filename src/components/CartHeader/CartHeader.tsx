import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'toolkit/hooks'
import './CartHeader.scss'
import { useEffect, useRef } from 'react'

type Props = {
    open: boolean
}

const CartHeader = ({ open }: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    const dialog = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (open) {
            dialog.current?.showModal()
        } else {
            dialog.current?.close()
        }
    }, [open])

    console.log(dialog)

    return (
        <dialog ref={dialog}>
            <h3>Cart List Modal</h3>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </dialog>
    )
}

export default CartHeader
