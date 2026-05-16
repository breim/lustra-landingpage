import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c9f04a'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 110,
          height: 110,
          display: 'flex'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 22,
            top: 8,
            width: 26,
            height: 82,
            borderRadius: 6,
            backgroundColor: '#16201a'
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 22,
            top: 64,
            width: 56,
            height: 26,
            borderRadius: 6,
            backgroundColor: '#16201a'
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 76,
            width: 28,
            height: 28,
            borderRadius: '50%',
            backgroundColor: '#16201a'
          }}
        />
      </div>
    </div>,
    { ...size }
  )
}
