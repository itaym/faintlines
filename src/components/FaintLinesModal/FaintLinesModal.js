import Modal from './Modal'
import ModalController from './ModalController'
import SingleInstanceComponent from '../SingleInstanceComponent'
import reducer from './redux/reducers'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { modalAddRequest, modalClrRequest, modalNowRequest } from './redux/actions'

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export const initFaintLinesModal = SingleInstanceComponent.SingleInstanceComponentInit

export const getModalPreview = (modalProps) =>
    <Modal { ...modalProps } preview={true} />

export const showModal = (modalProps) =>
    store.dispatch(modalAddRequest(modalProps))

export const showModalNow = (modalProps) =>
    store.dispatch(modalNowRequest(modalProps))

export const clearAllModals = () =>
    store.dispatch(modalClrRequest())

const uniqueID = Math.random()
const FaintLinesModal = ({onOK = () => {}, onCancel = () => {}}) =>
    <Provider store={store}>
        <SingleInstanceComponent id={uniqueID}>
            <ModalController
                key="staticKey"
                onOKPress={onOK}
                onCancelPress={onCancel} />
        </SingleInstanceComponent>
    </Provider>

export default FaintLinesModal
