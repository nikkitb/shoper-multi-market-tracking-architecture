function generateEventId() {
  const uid =
    window.crypto && window.crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now().toString(36) + Math.random().toString(36).slice(2);

  return `evt_${uid}`;
}