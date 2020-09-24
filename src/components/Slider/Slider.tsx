import React, {useCallback, useRef} from "react";
import styles from './Slider.module.css'

interface SliderProps {
    value: number,
    setValue(value: any): void
}

export const Slider: React.FC<SliderProps> = (props) => {
    let slider: any = useRef(null);
    let tumb: any = useRef(null);
    let value: any = useRef(null);

    const onMouseDown = useCallback((event) => {
        let containerWidth = slider.current.getBoundingClientRect().width;
        let width = tumb.current.getBoundingClientRect().width;
        let left = slider.current.getBoundingClientRect().left + width / 2;


        function onMouseMove(event: any) {
            let newleft = event.pageX - left + width / 2;
            if (newleft < 0) {
                newleft = 0;
            }
            if (newleft > containerWidth) {
                newleft = containerWidth;
            }
            props.setValue(newleft / containerWidth * 100);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

    }, []);

    const onDragStart = useCallback((event) => {
        event.preventDefault();
    }, []);

    return <div ref={slider} className={styles.slider} onDragStart={onDragStart}>
        <div ref={value} style={{width: props.value + '%'}} className={styles.value} onDragStart={onDragStart}/>
        <div ref={tumb} style={{left: props.value + '%'}} onMouseDown={onMouseDown} className={styles.tumb} onDragStart={onDragStart}/>
    </div>
}
