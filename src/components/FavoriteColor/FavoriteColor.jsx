
export default function FavoriteColor({ color, showFavoriteColorModal }) {

    return (
        <div
            className='colorbox'
            onClick={() => showFavoriteColorModal(color)}
            style={{
                backgroundColor: `${color.hex.value}`
            }}
        >
            <p>{color.hex.value}</p>
        </div>
    );
}
