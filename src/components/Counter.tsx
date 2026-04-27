import { useCounterStore } from '@/store/counterStore'

function Counter() {
  const { count, increment, decrement, incrementBy, reset } =
    useCounterStore()

  return (
    <div>
      <div className="section">
        <div className="section-title">Counter Value</div>
        <div className="display-value">{count}</div>
      </div>

      <div className="section">
        <div className="section-title">Actions</div>
        <div className="button-group">
          <button className="btn-secondary" onClick={() => decrement()}>
            −1
          </button>
          <button className="btn-primary" onClick={() => increment()}>
            +1
          </button>
        </div>

        <div className="button-group">
          <button className="btn-secondary" onClick={() => incrementBy(10)}>
            +10
          </button>
          <button className="btn-secondary" onClick={() => incrementBy(-10)}>
            −10
          </button>
        </div>

        <div className="button-group">
          <button className="btn-danger" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>

      <div className="section">
        <div className="section-title">How it works</div>
        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
          This counter demonstrates the basics of Zustand:
        </p>
        <ul
          style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.8',
            marginLeft: '20px',
            marginTop: '8px',
          }}
        >
          <li>State is defined in the store</li>
          <li>Actions modify the state</li>
          <li>Components subscribe to state changes</li>
          <li>Only affected components re-render</li>
        </ul>
      </div>
    </div>
  )
}

export default Counter
