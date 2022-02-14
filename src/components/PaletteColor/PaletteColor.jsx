
export default function PaletteColor({ color }) {
    return (
        <div
            className='colorbox'
            style={{
                background: `${color.hex.value}`
            }}
        >
            <p>{color.hex.value}</p>
        </div>
    );
}