import Conditional from '../Conditional'
import Modal from '../Modal'
import React, { useCallback, useMemo } from 'react'
import { modalDelRequest } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'

const ModalController = ({ onOKPress, onCancelPress }) => {

    const dispatch = useDispatch()
    const modalRef = useRef(<Modal key="staticKey" />)
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

    const modalClone = useMemo(() =>
        React.cloneElement(modalRef.current, {
            ...modalReq,
            onCancel,
            onOK,
        }), [modalReq, onCancel, onOK])

    return (
        <Conditional condition={!!modalReq}>
            {modalClone}
        </Conditional>
    )
}

export default ModalController