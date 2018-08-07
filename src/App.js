import React, { Component } from 'react';
import Button from './components/Button.js';
import Title from './components/Title.js';
import Line from './components/Line.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { colors, fonts, borders, transitions } from './styles';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Title
            color={colors.lightGrey}
            size={fonts.size.large}
            text={"Buttons"}
          />
          <Line
            color={colors.lightGrey}
          />
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Button
              color={colors.darkGrey}
              hoverColor={colors.darkGrey}
              size={fonts.size.small}
              border={borders.width.thin}
              text="Square"
            />
            <Button
              color={colors.darkGrey}
              hoverColor={colors.darkGrey}
              size={fonts.size.medium}
              border={borders.width.moderate}
              text="Square"
            />
            <Button
              color={colors.darkGrey}
              hoverColor={colors.darkGrey}
              size={fonts.size.large}
              border={borders.width.thick}
              text="Square"
            />
          </Col>
          <Col xs={12} sm={6}>
            <Button
              color={colors.darkGrey}
              hoverColor={colors.darkGrey}
              size={fonts.size.small}
              border={borders.width.thin}
              text="Round"
              round
            />
            <Button
              color={colors.darkGrey}
              hoverColor={colors.darkGrey}
              size={fonts.size.medium}
              border={borders.width.moderate}
              text="Round"
              round
            />
            <Button
              color={colors.darkGrey}
              hoverColor={colors.darkGrey}
              size={fonts.size.large}
              border={borders.width.thick}
              text="Round"
              round
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
