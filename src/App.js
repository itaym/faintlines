import './App.css';
import FaintLinesModal, { initFaintLinesModal, clearAllModals, showModal, showModalNow } from './FaintLinesModal'
import ModalPreview from './ModalPreview'
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
        const modalProps = cancelMessages[Math.round(Math.random() * 5)]
        if (!event.detail.allowCancel)
            showModalNow({
                ...modalProps,
                previous: {...event.detail},
            })
    }, [])

    useEffect(() => {
        const fiveSeconds = 5_000
        let milliseconds = fiveSeconds
        const timeHandlers = []

        for (let modalProps of messagesAutoRun) {
            timeHandlers.push(setTimeout(() => {
                showModal(modalProps)
            }, milliseconds))
            milliseconds += fiveSeconds
        }
        return () => {
            for (let timeHandler of timeHandlers) {
                clearTimeout(timeHandler)
            }
        }
    }, [])
    return (
        <div className="App">
            <div className="mock_image">
                <img alt="" src={"/images/faintLines_image.png"} style={{
                    margin: 'auto',
                }}/>
            </div>
            <header>
                <img alt="" src="/images/faintLines.svg"/>
                <hr/>
                <span>Home assignment executed by <b>Itay Merchav</b>, Front End position</span>
            </header>
            <div className="preview_holder">
                {messagesExamples.map((modalPros) =>
                    <ModalPreview {...{
                        ...modalPros,
                        allowCancel: true,
                    }} />
                )}
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
