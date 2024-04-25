import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef();

    // useImperativeHandle handler
    useImperativeHandle(ref, () => ({
        focus: () => {
            realInputRef.current.focus();
        },
    }));

    return <input {...props} ref={realInputRef}/>;
});

export default MyInput;
