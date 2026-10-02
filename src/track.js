export const track = (name, data) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(name, data)
  }
}
