import React from 'react'
import ThemeContext from '../context/ThemeContext';
import AvatarTitle from './AvatarTitle';
import ViewCard from './ViewCard';

const SocialMediaGraphics = () => {
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <section>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <div>
                                <AvatarTitle number='1' title="Social Media Graphics" color={theme.primaryColor} 
                                subtitle='Elevating your online presence with stunning graphics and cohesive aesthetics.'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ViewCard/>
                    </div>

                </section>
            )}
        </ThemeContext.Consumer>
    )
}

export default SocialMediaGraphics