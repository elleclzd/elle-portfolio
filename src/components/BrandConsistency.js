import AvatarTitle from './AvatarTitle'
import React from 'react'
import ThemeContext from '../context/ThemeContext';

const BrandConsistency = () => {
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <section>
                    <div>
                        <div>
                            <AvatarTitle number='2' title="Brand Consistency" color={theme.primaryColor}
                                subtitle='Ensuring a cohesive visual identity across all your platforms and materials.'/>
                        </div>
                    </div>
                    <div>
                    </div>
                </section>
            )}
        </ThemeContext.Consumer>
    )
}

export default BrandConsistency