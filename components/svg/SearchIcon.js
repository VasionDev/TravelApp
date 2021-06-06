import React from 'react'
import Svg, { Path } from "react-native-svg"

const SearchIcon = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={15.999}
            viewBox="0 0 16 15.999"
        >
            <Path
                fill="#007a53"
                d="M15.766 14.2l-4.074-4.072a6.452 6.452 0 10-1.564 1.564l4.072 4.074a.794.794 0 001.123 0l.442-.442a.792.792 0 00.001-1.124zm-5.115-7.768a4.218 4.218 0 11-4.219-4.219 4.224 4.224 0 014.219 4.22z"
                data-name="Search-icon"
            />
        </Svg>
    )
}

export default SearchIcon
