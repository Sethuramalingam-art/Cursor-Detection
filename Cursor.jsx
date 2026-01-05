import useMousePosition from "./hooks/useMousePosition";

const Cursor = () => {
  const [mouseposition, divRef] = useMousePosition();
  console.log(mouseposition);
  return (
    <div>
      Cursor
      <div className="cursor-div" ref={divRef}>
        Move your mouse here to see the cursor effect. horizontal:
        {mouseposition.x}
        vertical: {mouseposition.y}
      </div>
    </div>
  );
};

export default Cursor;
