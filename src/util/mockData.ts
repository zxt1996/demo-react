export type arrKey = string | number;
export function generate (): arrKey[][] {
    let data: arrKey[][] = [['Index', `Data1`, `Data2`, `Data3`]]
  
    for (let i = 0; i < 15; i++) {
      data.push([
        i+1, 
        parseInt(Date.now() + (Math.random() * 10000000).toString()).toString(16), 
        parseInt(Date.now() + (Math.random() * 10000000).toString()).toString(16),
        parseInt(Date.now() + (Math.random() * 10000000).toString()).toString(16)
      ])
    }
  
    return data
  }
  