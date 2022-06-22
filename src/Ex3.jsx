import { Box, HamburgerIcon, IconButton, Menu } from "native-base";
import { Pressable, Text } from "react-native";

export function Ex3() {
    return <Box h="80%" w="90%" alignItems="flex-start">
        <Menu w="190" trigger={MenuIcon} >
            <Menu.Item {...e.item}>Nunito Sans <HamburgerIcon /></Menu.Item>
            <Menu.Item>Roboto</Menu.Item>
            <Menu.Item>Poppins</Menu.Item>
            <Menu.Item>SF Pro</Menu.Item>
            <Menu.Item>Helvetica</Menu.Item>
            <Menu.Item isDisabled>Sofia</Menu.Item>
            <Menu.Item>Cookie</Menu.Item>
        </Menu>
    </Box>;
}


function MenuIcon({ ref, onPress }, state) {
    return (<IconButton onPress={onPress} ref={ref} icon={<HamburgerIcon />} />);
}

const e = {
    item : {
        _text: {
            color: 'white',
            fontSize: 18
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'white',
        padding: 5
    }
}