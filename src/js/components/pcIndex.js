
import React from 'react';
import PcHeader from './pcHeader';
import PcFooter from './pcFooter';
import PcList from './pcList';
class PcIndex extends React.Component {
    render() {
        return(
            <div>
                <PcHeader></PcHeader>
                <PcList></PcList>
                <PcFooter></PcFooter>
            </div>
        )
    }
}
export default PcIndex;