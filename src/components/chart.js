import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from 'react-native';

const styles = StyleSheet.create({

});

export default class Chart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            chartMsg,
            changeChartMsg,
        } = this.props;

        return (
            <View>
                <Text>{chartMsg}</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => changeChartMsg(text)}
                    value={chartMsg}
                  />
            </View>
        );
    }
}