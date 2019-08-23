import React from 'react'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'


function TeacherApps({ apps }) {
    const handleClick = app => () => {
        console.log(app)
    }

    return (

        <div>
            <HeaderLogo />
            <div className="apps-container d-flex flex-wrap justify-content-center">
                {apps.map(app => {
                    return <TeacherAppItemDesktop name={app.title} description={app.description} link={app.link} onClick={handleClick(app)} />
                })}
            </div>
        </div>
    )
}

export default TeacherApps
