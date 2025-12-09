"use client"

/**
 * Compoenents
 */
import Filter from './filter'

const Header = () => {
    return (
        <Filter>
            <Filter.Content />
            <Filter.Toggle />
        </Filter>
    )
}

export default Header