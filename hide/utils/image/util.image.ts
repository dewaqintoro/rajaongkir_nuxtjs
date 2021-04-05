function proxyImage(link: string, width: number): string {
  if (link) return `//images.weserv.nl/?url=${link}&w=${width}&il&output=png`
  else return ''
}

export { proxyImage }
