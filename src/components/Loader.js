import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
	<ContentLoader
		speed={2}
		width={155}
		height={190}
		viewBox="0 0 155 190"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
		<rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
		<rect x="0" y="125" rx="3" ry="3" width="90" height="15" />
		<rect x="0" y="160" rx="8" ry="8" width="80" height="24" />
		<rect x="120" y="155" rx="8" ry="8" width="32" height="32" />
	</ContentLoader>
)

export default Loader

