import React, {
    useMemo,
    useRef,
    useEffect,
    useLayoutEffect,
    useState,
} from "react"
import * as d3 from "d3"

const MARGIN = { top: 5, right: 30, bottom: 15, left: 30 }
const BAR_PADDING = 0.3
const ASPECT_RATIO = 9 / 25 // 16:9 aspect ratio
const MAX_HEIGHT = 300

const squareSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <defs>
            <filter id="glow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="glow" />
                <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />ww
                </feMerge>
            </filter>
        </defs>
        <rect x="0" y="0" width="20" height="20" fill="#FDB813" filter="url(#glow)" />
    </svg>
`
const svgData = new Blob([squareSvg], { type: "image/svg+xml;charset=utf-8" })
const squareUrl = URL.createObjectURL(svgData)

type BarplotProps = {
    data: { name: string; value: number }[]
}

export const Barplot = ({ data }: BarplotProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const width = containerRef.current?.clientWidth || 400
    const height = Math.min(width * ASPECT_RATIO, MAX_HEIGHT)
    const boundsWidth = width - MARGIN.right - MARGIN.left
    const boundsHeight = Math.min(
        height - MARGIN.top - MARGIN.bottom,
        MAX_HEIGHT - MARGIN.top - MARGIN.bottom
    )

    const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name)
    const yScale = useMemo(() => {
        return d3
            .scaleBand()
            .domain(groups)
            .range([0, boundsHeight])
            .padding(BAR_PADDING)
    }, [data, height])

    const xScale = useMemo(() => {
        const [min, max] = d3.extent(data.map((d) => d.value))
        return d3
            .scaleLinear()
            .domain([0, max || 10])
            .range([0, boundsWidth])
    }, [data, width])

    const allShapes = data.map((d, i) => {
        const y = yScale(d.name)
        if (y === undefined) {
            return null
        }

        return (
            <g key={i} className="mx-auto flex">
                <rect
                    x={xScale(0)}
                    y={yScale(d.name)}
                    width={xScale(d.value)}
                    height={yScale.bandwidth()}
                    opacity={0.7}
                    stroke="#9d174d"
                    fill="#9d174d"
                    fillOpacity={0.3}
                    strokeWidth={1}
                    rx={1}
                />
                <text
                    x={xScale(d.value) - 7}
                    y={y + yScale.bandwidth() / 2}
                    textAnchor="end"
                    alignmentBaseline="central"
                    fontSize={12}
                    opacity={xScale(d.value) > 90 ? 1 : 0}
                >
                    {d.value}
                </text>
                <text
                    x={xScale(0) + 7}
                    y={y + yScale.bandwidth() / 2}
                    textAnchor="start"
                    alignmentBaseline="central"
                    fontSize={12}
                >
                    {d.name}
                </text>
            </g>
        )
    })

    const grid = xScale
        .ticks(5)
        .slice(1)
        .map((value, i) => (
            <g key={i}>
                <line
                    x1={xScale(value)}
                    x2={xScale(value)}
                    y1={0}
                    y2={boundsHeight}
                    stroke="#808080"
                    opacity={0.2}
                />
                <text
                    x={xScale(value)}
                    y={boundsHeight + 10}
                    textAnchor="middle"
                    alignmentBaseline="central"
                    fontSize={9}
                    stroke="#808080"
                    opacity={0.8}
                >
                    {value}
                </text>
            </g>
        ))

    useLayoutEffect(() => {
        const handleResize = () => {
            const newWidth = containerRef.current?.clientWidth || 400
            if (newWidth !== width) {
                // update the width and re-render
                window.requestAnimationFrame(() => {
                    // use requestAnimationFrame to debounce the re-render
                    setWidth(newWidth)
                })
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [width])

    return (
        <div className="w-full" ref={containerRef}>
            <svg width="100%" height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(
                        ","
                    )})`}
                >
                    {grid}
                    {allShapes}
                </g>
            </svg>
        </div>
    )
}
