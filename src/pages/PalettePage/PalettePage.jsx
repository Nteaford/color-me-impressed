import "./PalettePage.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneratedPaletteContainer from '../../components/GeneratedPaletteContainer/GeneratedPaletteContainer';
import * as colorsAPIExternal from '../../utilities/colors-api-external';
import * as colorsAPIInternal from '../../utilities/colors-api-internal';

export default function PalettePage() {
    const navigate = useNavigate();
    const { colorHex } = useParams();
    const [monoPalette, setMonoPalette] = useState([]);
    const [analPalette, setAnalPalette] = useState([]);
    const [compPalette, setCompPalette] = useState([]);
    const [splitACPalette, setSplitACPalette] = useState([]);
    const [triadicPalette, setTriadicPalette] = useState([]);
    const [squarePalette, setSquarePalette] = useState([]);


    useEffect(function () {

        fetchMonoPalette(colorHex);
        fetchAnalPalette(colorHex);
        fetchComplementaryPalette(colorHex);
        fetchSplitPalette(colorHex);
        fetchTriPalette(colorHex);
        fetchQuadPalette(colorHex);
    }, []);

    async function fetchMonoPalette(colorHex) {
        const monoPaletteFetch = await colorsAPIExternal.fetchMonoPalette(colorHex);
        setMonoPalette(monoPaletteFetch);
    }
    async function fetchAnalPalette(colorHex) {
        const analPaletteFetch = await colorsAPIExternal.fetchAnalPalette(colorHex);
        setAnalPalette(analPaletteFetch);
    }
    async function fetchComplementaryPalette(colorHex) {
        const compPaletteFetch = await colorsAPIExternal.fetchCompPalette(colorHex);
        setCompPalette(compPaletteFetch);
    }
    async function fetchSplitPalette(colorHex) {
        const splitPaletteFetch = await colorsAPIExternal.fetchSplitPalette(colorHex);
        setSplitACPalette(splitPaletteFetch);
    }
    async function fetchTriPalette(colorHex) {
        const triPaletteFetch = await colorsAPIExternal.fetchTriPalette(colorHex);
        setTriadicPalette(triPaletteFetch);
    }
    async function fetchQuadPalette(colorHex) {
        const quadPaletteFetch = await colorsAPIExternal.fetchQuadPalette(colorHex);
        setSquarePalette(quadPaletteFetch);
    }

    async function handleAddPalette(palette) {
        console.log(palette);
        await colorsAPIInternal.addPaletteToFavorites(palette);
        navigate('/favorites');

    }


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1> Palettes</h1>
            <br />
            <br />
            <br />


            <div className="PalattePage">

                <div>
                    <h2>Monochromatic Scheme </h2>
                    <br />
                    <GeneratedPaletteContainer palette={monoPalette} />
                    <button onClick={() => handleAddPalette(monoPalette)}> Save Palette</button>
                    <p>
                        Monochromatic color schemes use a single color with varying shades and tints to produce a consistent look and feel. Although it lacks color contrast, it often ends up looking very clean and polished. It also allows you to easily change the darkness and lightness of your colors.
                    </p>
                    <p>
                        Monochromatic color schemes are often used for charts and graphs when creating high contrast isn't necessary.
                    </p>

                </div>
                <br />
                <div>
                    <h2>Analogous Scheme </h2>
                    <br />
                    <GeneratedPaletteContainer palette={analPalette} />
                    <button onClick={() => handleAddPalette(analPalette)}> Save Palette</button>
                    <p>
                        Analogous color schemes are formed by pairing one main color with the two colors directly next to it on the color wheel. Analogous structures do not create themes with high contrasting colors, so they're typically used to create a softer, less contrasting design. For example, you could use an analogous structure to create a color scheme with autumn or spring colors.
                    </p>
                    <p>
                        Analogous schemes are often used to design images rather than infographics or bar charts as all of the elements blend together nicely.
                    </p>

                </div>
                <br />
                <div>
                    <h2>Complementary Scheme </h2>
                    <br />
                    <GeneratedPaletteContainer palette={compPalette} />
                    <button onClick={() => handleAddPalette(compPalette)}> Save Palette</button>
                    <p>
                        Complementary color schemes are based on the use of two colors directly across from each other on the color wheel and relevant tints of those colors. The complementary color scheme provides the greatest amount of color contrast. Because of this, you should be careful about how you use the complementary colors in a scheme.
                    </p>
                    <p>
                        It's best to use one color predominantly and use the second color as accents in your design. The complementary color scheme is also great for charts and graphs. High contrast helps you highlight important points and takeaways.
                    </p>

                </div>
                <br />
                <div>
                    <h2>Split Complementary Scheme </h2>
                    <br />
                    <GeneratedPaletteContainer palette={splitACPalette} />
                    <button onClick={() => handleAddPalette(splitACPalette)}> Save Palette</button>
                    <p>
                        A split complementary scheme includes one dominant color and the two colors directly adjacent to the dominant color's complement. This creates a more nuanced color palette than a complementary color scheme while still retaining the benefits of contrasting colors. The split complementary color scheme can be difficult to balance because unlike analogous or monochromatic color schemes, the colors used all provide contrast (similar to the complementary scheme).
                    </p>
                    <p>
                        The positive and negative aspect of the split complementary color model is that you can use any two colors in the scheme and get great contrast ... but that also means it can also be tricky to find the right balance between the colors. As a result, you may end up playing around with this one a bit more to find the right combination of contrast.
                    </p>

                </div>
                <br />
                <div>
                    <h2>Triadic Scheme </h2>
                    <br />
                    <GeneratedPaletteContainer palette={triadicPalette} />
                    <button onClick={() => handleAddPalette(triadicPalette)}> Save Palette</button>
                    <p>
                        Triadic color schemes offer high contrasting color schemes while retaining the same tone. Triadic color schemes are created by choosing three colors that are equally placed in lines around the color wheel. Triad color schemes are useful for creating high contrast between each color in a design, but they can also seem overpowering if all of your colors are chosen on the same point in a line around the color wheel.
                    </p>
                    <p>
                        The triadic color scheme looks great in graphics like bar or pie charts because it offers the contrast you need to create comparisons.
                    </p>

                </div>
                <br />
                <div>
                    <h2>Square Scheme </h2>
                    <br />
                    <GeneratedPaletteContainer palette={squarePalette} />
                    <button onClick={() => handleAddPalette(squarePalette)}> Save Palette</button>
                    <p>
                        The square color scheme uses four colors equidistant from each other on the color wheel to create a square or diamond shape. While this evenly-spaced color scheme provides substantial contrast to your design, it’s a good idea to select one dominant color rather than trying to balance all four.
                    </p>
                    <p>
                        Square color schemes are great for creating interest across your web designs. Not sure where to start? Pick your favorite color and work from there to see if this scheme suits your brand or website. It’s also a good idea to try square schemes against both black and white backgrounds to find the best fit.
                    </p>

                </div>
            </div>
        </>
    )
}