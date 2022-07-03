import './style.css'

const Feedback = ({ feeds }) => {
  return (
    <section className='feedback'>
        <div className="feedback-box">
            <div className="feedback-title">
                <h1>What Customers Says?</h1>
            </div>
            <div className="all-feedbacks">
                {
                    feeds.map(feed=> {
                        return <article className='feed-card' key={feed.id}>
                            <div className="feed-avatar">
                                <img src={feed.avatar} alt="avatar" />
                            </div>
                            <h2>{feed.customer}</h2>
                            <p>{feed.content}</p>
                        </article>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Feedback