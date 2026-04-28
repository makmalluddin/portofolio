import MiniTraining from './card/MiniTraining'
import BigTraining from './card/BigTraining'

function CertificationCard() {
    return (
        <div className='flex gap-1 border border-amber-400'>
            <div className='flex flex-col items-start justify-center gap-2 m-2'>
                <div>
                    <MiniTraining />
                </div>
                <div>
                    <MiniTraining />
                </div>
                <div>
                    <MiniTraining />
                </div>
                <div>
                    <MiniTraining />
                </div>
                <div>
                    <MiniTraining />
                </div>
                <div>
                    <MiniTraining />
                </div>
                
            </div>

            <div className='flex-1'>
                <BigTraining />
            </div>
        </div>
    )
}

export default CertificationCard