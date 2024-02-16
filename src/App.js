import FaintLinesModal, { initFaintLinesModal, clearAllModals, showModal, showModalNow } from './components/FaintLinesModal'
import ModalPreview from './components/ModalPreview'
import ResizeAnimation from './components/ResizeAnimation'
import styles from './App.module.scss';
import { cancelMessages, messagesAutoRun, messagesExamples } from './data'
import { useCallback, useEffect } from 'react'

function App() {
    initFaintLinesModal()
    clearAllModals()

    const onOK = useCallback((event) => {
        console.log(event.detail)
        if (event.detail.allowCancel) {
            if (event.detail.previous)
                showModalNow(event.detail.previous)
        }
    }, [])
    const onCancel = useCallback((event) => {
        console.log(event.detail)
        const messagesLength = cancelMessages.length - 1
        const modalProps = cancelMessages[Math.round(Math.random() * messagesLength)]
        if (!event.detail.allowCancel)
            showModalNow({
                ...modalProps,
                previous: {...event.detail},
            })
    }, [])

    useEffect(() => {
        const twoSeconds = 2_000
        let milliseconds = 0
        const timeHandlers = []

        for (let modalProps of messagesAutoRun) {
            timeHandlers.push(setTimeout(() => {
                showModal(modalProps)
            }, milliseconds))
            milliseconds += twoSeconds
        }
        return () => {
            for (let timeHandler of timeHandlers) {
                clearTimeout(timeHandler)
            }
        }
    }, [])
    return (
        <div className={styles.App}>
            <div className={styles.mock_image}>
                <img alt="" src={"/images/faintLines_image.png"} />
            </div>
            <header>
                <img alt="" src="/images/faintLines.svg"/>
                <hr/>
                <span>Home assignment executed by <b>Itay Merchav</b>, Front End position</span>
            </header>
            <div className={styles.preview_holder}>
                <div className={styles.preview_holder_animate}>
                {messagesExamples.map((modalPros) =>
                    <ResizeAnimation
                        key={JSON.stringify(modalPros)}>
                        <ModalPreview
                            {...{
                            ...modalPros,
                            allowCancel: true,
                        }} />
                    </ResizeAnimation>
                )}
                </div>
            </div>
            {/** It does not matter how many times FaintLinesModal will     */}
            {/** appear nor where it appears. It will only be rendered once.*/}
            <FaintLinesModal onOK={onOK} onCancel={onCancel}/>
            <FaintLinesModal onOK={onOK} onCancel={onCancel}/>
            <FaintLinesModal onOK={onOK} onCancel={onCancel}/>
            <FaintLinesModal onOK={onOK} onCancel={onCancel}/>
            <FaintLinesModal onOK={onOK} onCancel={onCancel}/>
        </div>
    )
}

export default App
