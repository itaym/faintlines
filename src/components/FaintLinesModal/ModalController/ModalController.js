import Conditional from '../../Conditional'
import Modal from '../Modal'
import React, { useCallback } from 'react'
import { modalDelRequest } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const ModalController = ({ onOKPress, onCancelPress }) => {

    const dispatch = useDispatch()
    const modalReq = useSelector(({ modalQueue }) => modalQueue[0])

    const onCancel = useCallback(() => {
        const event = new CustomEvent('onCancel', { detail: modalReq })
        dispatch(modalDelRequest())
        onCancelPress(event)
    }, [dispatch, onCancelPress, modalReq])

    const onOK = useCallback(() => {
        const event = new CustomEvent('onOK', { detail: modalReq })
        dispatch(modalDelRequest())
        onOKPress(event)
    }, [dispatch, onOKPress, modalReq])

    return (
        <Conditional condition={!!modalReq}>
            <Modal
                key="staticKey"
                {...modalReq}
                onCancel={onCancel}
                onOK={onOK}
            />
        </Conditional>
    )
}

export default ModalController
