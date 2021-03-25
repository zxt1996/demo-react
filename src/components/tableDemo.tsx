import React,{
    useState
} from 'react';
import { generate, arrKey } from '../util/mockData';
const mockData: arrKey[][] = generate();

export function TableDemo() {
    const [selectedRowKeys, setSelectedRowKeys] = useState(new Map());
    const [allCheckout, setAllCheckout] = useState(0);
    const handleCheckout = () => {
        let map = new Map();
        for (let i = 1;i < mockData.length;i++) {
            allCheckout < mockData.length - 1 ? map.set(i, true) : map.set(i, false);
        }
        allCheckout === mockData.length - 1 ? setAllCheckout(0) : setAllCheckout(mockData.length - 1);
        setSelectedRowKeys(map);
    }

    const handleOneCheckout = (who) => {
        const updateMap = new Map(selectedRowKeys);
        !!updateMap.get(who) ? setAllCheckout(allCheckout - 1) 
                            : setAllCheckout(allCheckout + 1);
        updateMap.set(who, !(!!updateMap.get(who)));
        setSelectedRowKeys(updateMap);
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th align="center" key={`checkboxH`}>
                            <input type="checkbox"
                                className={ allCheckout < mockData.length - 1 && allCheckout > 0 
                                            ? `checkboxH` 
                                            : ''
                                        }
                                checked={allCheckout === mockData.length - 1} 
                                onChange={() => handleCheckout()}/>
                        </th>
                        {
                            mockData[0].map((val) => {
                                return (
                                    <th align="center" key={val}>
                                        <div className="itd">
                                            {
                                                `${val}`
                                            }    
                                        </div>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        mockData.map((val, pos) => {
                            return (pos !== 0) && (
                                <tr key={`tbody` + pos}>
                                    <td align="center" key={`checkbox` + pos}>
                                        <input type="checkbox" checked={!!selectedRowKeys.get(pos)} 
                                            onChange={() => handleOneCheckout(pos)}/>
                                    </td>
                                    {
                                        val.map((name) => {
                                            return (
                                                <td align="center" key={name}>
                                                    {
                                                        name
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}