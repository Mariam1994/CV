function createBody() {
    var link = 'https://en.wikipedia.org/wiki/';
    var main = $('main'), table = $('table'), caption = $('caption');
    caption.setAttribute('title','Periodic Table of The Elements');
    caption.innerText = 'Periodic Table of The Elements';
    var tbody = $('tbody');
    var tfoot = $('tfoot');
    tbody.innerHTML =
    	'<tr>'+
        '<td class="group">'+
        '<p class="groups">Groups</p>'+
        '<hr class="line" />'+
        '<p class="periods">Periods</p>'+
        '</td>'+
        '<th>'+
        '<p>1</p>'+
        '<p>lA</p>'+
        '</th>'+
        '<th colspan ="16"></th>'+
        '<th>'+
        '<p>18</p>'+
        '<p>VlllA</p>'+
        '</th>'+
        '</tr>'+
        '<tr>' +
        '<th><p>1</p></th>'+
        '<td class="nonmetal" title="Hydrogen">' +
        '<a href="' + link +'Hydrogen">' +
        '<ruby>' +
        '<rt>1</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'H</ruby>' +
        '<strong>Hydrogen</strong>' +
        '<tt>1.008</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>1</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'H</ruby>' +
        '<strong>Hydrogen</strong>' +
        '<tt>1.008</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<th class="number">'+
        '<p>2</p>'+
        '<p>llA</p>'+
        '</th>'+
        '<th colspan="10"></th>'+
        '<th class="number">'+
        '<p>13</p>'+
        '<p>lllA</p>'+
        '</th>'+
        '<th class="number">'+
        '<p>14</p>'+
        '<p>lVA</p>'+
        '</th>'+
        '<th class="number">'+
        '<p>15</p>'+
        '<p>VA</p>'+
        '</th>'+
        '<th class="number">'+
        '<p>16</p>'+
        '<p>VlA</p>'+
        '</th>'+
        '<th class="number">'+
        '<p>17</p>'+
        '<p>VllA</p>'+
        '</th>'+
        '<td class="noble_gas" title="Helium">' +
        '<a href="' + link +'Helium">' +
        '<ruby>' +
        '<rt>2</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'He</ruby>' +
        '<strong>Helium</strong>' +
        '<tt>4.003</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>2</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'He</ruby>' +
        '<strong>Helium</strong>' +
        '<tt>4.003</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th><p>2</p></th>'+
        '<td class="alkali_metal" title="Helium">' +
        '<a href="' + link +'Helium">' +
        '<ruby>' +
        '<rt>3</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Li</ruby>' +
        '<strong>Lithium</strong>' +
        '<tt>6.941</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>3</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Li</ruby>' +
        '<strong>Lithium</strong>' +
        '<tt>6.941</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="alkaline_earth" title="Beryllium">' +
        '<a href="' + link +'Beryllium">' +
        '<ruby>' +
        '<rt>4</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Be</ruby>' +
        '<strong>Beryllium</strong>' +
        '<tt>9.01218</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>4</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Be</ruby>' +
        '<strong>Beryllium</strong>' +
        '<tt>9.01218</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td colspan="10" class="no_border"></td>' +
        '<td class="semi_metal" title="Boron">' +
        '<a href="' + link +'Boron">' +
        '<ruby>' +
        '<rt>5</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'B</ruby>' +
        '<strong>Boron</strong>' +
        '<tt>10.811</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>5</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'B</ruby>' +
        '<strong>Boron</strong>' +
        '<tt>10.811</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="nonmetal" title="Carbon">' +
        '<a href="' + link +'Carbon">' +
        '<ruby>' +
        '<rt>6</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'C</ruby>' +
        '<strong>Carbon</strong>' +
        '<tt>12.011</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>6</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'C</ruby>' +
        '<strong>Carbon</strong>' +
        '<tt>12.011</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="nonmetal" title="Nitrogen">' +
        '<a href="' + link +'Nitrogen">' +
        '<ruby>' +
        '<rt>7</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'N</ruby>' +
        '<strong>Nitrogen</strong>' +
        '<tt>15.9994</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>7</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'N</ruby>' +
        '<strong>Nitrogen</strong>' +
        '<tt>15.9994</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="nonmetal" title="Oxygen">' +
        '<a href="' + link +'Oxygen">' +
        '<ruby>' +
        '<rt>8</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'O</ruby>' +
        '<strong>Oxygen</strong>' +
        '<tt>15.9994</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>8</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'O</ruby>' +
        '<strong>Oxygen</strong>' +
        '<tt>15.9994</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="halogen" title="Fluorine">' +
        '<a href="' + link +'Fluorine">' +
        '<ruby>' +
        '<rt>9</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'F</ruby>' +
        '<strong>Fluorine</strong>' +
        '<tt>18.998403</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>9</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'F</ruby>' +
        '<strong>Fluorine</strong>' +
        '<tt>18.998403</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="noble_gas" title="Neon">' +
        '<a href="' + link +'Neon">' +
        '<ruby>' +
        '<rt>10</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ne</ruby>' +
        '<strong>Neon</strong>' +
        '<tt>20.1797</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>10</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ne</ruby>' +
        '<strong>Neon</strong>' +
        '<tt>20.1797</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th><p>3</p></th>'+
        '<td class="alkali_metal" title="Sodium">' +
        '<a href="' + link +'Sodium">' +
        '<ruby>' +
        '<rt>11</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Na</ruby>' +
        '<strong>Sodium</strong>' +
        '<tt>22.989768</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>11</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Na</ruby>' +
        '<strong>Sodium</strong>' +
        '<tt>22.989768</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="alkaline_earth" title="Magnesium">' +
        '<a href="' + link +'Magnesium">' +
        '<ruby>' +
        '<rt>12</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mg</ruby>' +
        '<strong>Magnesium</strong>' +
        '<tt>24.305</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>12</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mg</ruby>' +
        '<strong>Magnesium</strong>' +
        '<tt>24.305</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<th class="number">' +
        '<p>3</p>' +
        '<p>lllB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>4</p>' +
        '<p>lVB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>5</p>' +
        '<p>VB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>6</p>' +
        '<p>VlB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>7</p>' +
        '<p>VllB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>8</p>' +
        '<p>VlllB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>9</p>' +
        '<p>VlllB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>10</p>' +
        '<p>VlllB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>11</p>' +
        '<p>lB</p>' +
        '</th>' +
        '<th class="number">' +
        '<p>12</p>' +
        '<p>llB</p>' +
        '</th>' +
        '<td class="basic_metal" title="Aluminium">' +
        '<a href="' + link +'Aluminium">' +
        '<ruby>' +
        '<rt>13</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Al</ruby>' +
        '<strong>Aluminium</strong>' +
        '<tt>26.981539</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>13</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Al</ruby>' +
        '<strong>Aluminium</strong>' +
        '<tt>26.981539</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="semi_metal" title="Silicon">' +
        '<a href="' + link +'Silicon">' +
        '<ruby>' +
        '<rt>14</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Si</ruby>' +
        '<strong>Silicon</strong>' +
        '<tt>28.0855</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>14</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Si</ruby>' +
        '<strong>Silicon</strong>' +
        '<tt>28.0855</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="nonmetal" title="Phosphorus">' +
        '<a href="' + link +'Phosphorus">' +
        '<ruby>' +
        '<rt>15</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'P</ruby>' +
        '<strong>Phosphorus</strong>' +
        '<tt>30.973762</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>15</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'P</ruby>' +
        '<strong>Phosphorus</strong>' +
        '<tt>30.973762</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="nonmetal" title="Sulfur">' +
        '<a href="' + link +'Sulfur">' +
        '<ruby>' +
        '<rt>16</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'S</ruby>' +
        '<strong>Sulfur</strong>' +
        '<tt>32.066</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>16</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'S</ruby>' +
        '<strong>Sulfur</strong>' +
        '<tt>32.066</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="halogen" title="Chlorine">' +
        '<a href="' + link +'Chlorine">' +
        '<ruby>' +
        '<rt>17</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cl</ruby>' +
        '<strong>Chlorine</strong>' +
        '<tt>35.4527</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>17</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cl</ruby>' +
        '<strong>Chlorine</strong>' +
        '<tt>35.4527</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="noble_gas" title="Argon">' +
        '<a href="' + link +'Argon">' +
        '<ruby>' +
        '<rt>18</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ar</ruby>' +
        '<strong>Argon</strong>' +
        '<tt>39.948</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>18</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ar</ruby>' +
        '<strong>Argon</strong>' +
        '<tt>39.948</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th><p>4</p></th>'+
        '<td class="alkali_metal" title="Potassium">' +
        '<a href="' + link +'Potassium">' +
        '<ruby>' +
        '<rt>19</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'K</ruby>' +
        '<strong>Potassium</strong>' +
        '<tt>39.0983</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>19</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'K</ruby>' +
        '<strong>Potassium</strong>' +
        '<tt>39.0983</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="alkaline_earth" title="Calcium">' +
        '<a href="' + link +'Calcium">' +
        '<ruby>' +
        '<rt>20</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ca</ruby>' +
        '<strong>Calcium</strong>' +
        '<tt>40.078</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>20</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ca</ruby>' +
        '<strong>Calcium</strong>' +
        '<tt>40.078</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Scandium">' +
        '<a href="' + link +'Scandium">' +
        '<ruby>' +
        '<rt>21</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sc</ruby>' +
        '<strong>Scandium</strong>' +
        '<tt>44.95591</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>21</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sc</ruby>' +
        '<strong>Scandium</strong>' +
        '<tt>44.95591</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Titanium">' +
        '<a href="' + link +'Titanium">' +
        '<ruby>' +
        '<rt>22</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ti</ruby>' +
        '<strong>Titanium</strong>' +
        '<tt>47.88</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>22</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ti</ruby>' +
        '<strong>Titanium</strong>' +
        '<tt>47.88</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Vanadium">' +
        '<a href="' + link +'Vanadium">' +
        '<ruby>' +
        '<rt>23</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'V</ruby>' +
        '<strong>Vanadium</strong>' +
        '<tt>50.9415</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>23</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'V</ruby>' +
        '<strong>Vanadium</strong>' +
        '<tt>50.9415</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Chromium">' +
        '<a href="' + link +'Chromium">' +
        '<ruby>' +
        '<rt>24</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cr</ruby>' +
        '<strong>Chromium</strong>' +
        '<tt>51.9961</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>24</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cr</ruby>' +
        '<strong>Chromium</strong>' +
        '<tt>51.9961</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Manganese">' +
        '<a href="' + link +'Manganese">' +
        '<ruby>' +
        '<rt>25</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mn</ruby>' +
        '<strong>Manganese</strong>' +
        '<tt>54.938</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>25</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mn</ruby>' +
        '<strong>Manganese</strong>' +
        '<tt>54.938</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Iron">' +
        '<a href="' + link +'Iron">' +
        '<ruby>' +
        '<rt>26</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fe</ruby>' +
        '<strong>Iron</strong>' +
        '<tt>55.847</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>26</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fe</ruby>' +
        '<strong>Iron</strong>' +
        '<tt>55.847</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Cobalt">' +
        '<a href="' + link +'Cobalt">' +
        '<ruby>' +
        '<rt>27</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Co</ruby>' +
        '<strong>Cobalt</strong>' +
        '<tt>58.9332</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>27</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Co</ruby>' +
        '<strong>Cobalt</strong>' +
        '<tt>58.9332</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Nickel">' +
        '<a href="' + link +'Nickel">' +
        '<ruby>' +
        '<rt>28</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ni</ruby>' +
        '<strong>Nickel</strong>' +
        '<tt>58.6934</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>28</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ni</ruby>' +
        '<strong>Nickel</strong>' +
        '<tt>58.6934</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Copper">' +
        '<a href="' + link +'Copper">' +
        '<ruby>' +
        '<rt>29</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cu</ruby>' +
        '<strong>Copper</strong>' +
        '<tt>63.546</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>29</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cu</ruby>' +
        '<strong>Copper</strong>' +
        '<tt>63.546</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Zinc">' +
        '<a href="' + link +'Zinc">' +
        '<ruby>' +
        '<rt>30</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Zn</ruby>' +
        '<strong>Zinc</strong>' +
        '<tt>65.39</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>30</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Zn</ruby>' +
        '<strong>Zinc</strong>' +
        '<tt>65.39</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Gallium">' +
        '<a href="' + link +'Gallium">' +
        '<ruby>' +
        '<rt>31</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ga</ruby>' +
        '<strong>Gallium</strong>' +
        '<tt>69.732</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>31</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ga</ruby>' +
        '<strong>Gallium</strong>' +
        '<tt>69.732</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="semi_metal" title="Germanium">' +
        '<a href="' + link +'Germanium">' +
        '<ruby>' +
        '<rt>32</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ge</ruby>' +
        '<strong>Germanium</strong>' +
        '<tt>72.64</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>32</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ge</ruby>' +
        '<strong>Germanium</strong>' +
        '<tt>72.64</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="semi_metal" title="Arsenic">' +
        '<a href="' + link +'Arsenic">' +
        '<ruby>' +
        '<rt>33</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'As</ruby>' +
        '<strong>Arsenic</strong>' +
        '<tt>74.92159</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>33</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'As</ruby>' +
        '<strong>Arsenic</strong>' +
        '<tt>74.92159</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="nonmetal" title="Selenium">' +
        '<a href="' + link +'Selenium">' +
        '<ruby>' +
        '<rt>34</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Se</ruby>' +
        '<strong>Selenium</strong>' +
        '<tt>78.96</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>34</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Se</ruby>' +
        '<strong>Selenium</strong>' +
        '<tt>78.96</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="halogen" title="Bromine">' +
        '<a href="' + link +'Bromine">' +
        '<ruby>' +
        '<rt>35</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Br</ruby>' +
        '<strong>Bromine</strong>' +
        '<tt>79.904</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>35</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Br</ruby>' +
        '<strong>Bromine</strong>' +
        '<tt>79.904</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="noble_gas" title="Krypton">' +
        '<a href="' + link +'Krypton">' +
        '<ruby>' +
        '<rt>36</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Kr</ruby>' +
        '<strong>Krypton</strong>' +
        '<tt>83.80</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>36</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Kr</ruby>' +
        '<strong>Krypton</strong>' +
        '<tt>83.80</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th><p>5</p></th>'+
        '<td class="alkali_metal" title="Rubidium">' +
        '<a href="' + link +'Rubidium">' +
        '<ruby>' +
        '<rt>37</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rb</ruby>' +
        '<strong>Rubidium</strong>' +
        '<tt>85.4678</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>37</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rb</ruby>' +
        '<strong>Rubidium</strong>' +
        '<tt>85.4678</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="alkaline_earth" title="Strontium">' +
        '<a href="' + link +'Strontium">' +
        '<ruby>' +
        '<rt>38</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sr</ruby>' +
        '<strong>Strontium</strong>' +
        '<tt>87.62</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>38</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sr</ruby>' +
        '<strong>Strontium</strong>' +
        '<tt>87.62</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Yttrium">' +
        '<a href="' + link +'Yttrium">' +
        '<ruby>' +
        '<rt>39</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Y</ruby>' +
        '<strong>Yttrium</strong>' +
        '<tt>88.90585</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>39</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Y</ruby>' +
        '<strong>Yttrium</strong>' +
        '<tt>88.90585</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Zirconium">' +
        '<a href="' + link +'Zirconium">' +
        '<ruby>' +
        '<rt>40</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Zr</ruby>' +
        '<strong>Zirconium</strong>' +
        '<tt>91.224</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>40</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Zr</ruby>' +
        '<strong>Zirconium</strong>' +
        '<tt>91.224</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Niobium">' +
        '<a href="' + link +'Niobium">' +
        '<ruby>' +
        '<rt>41</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Nb</ruby>' +
        '<strong>Niobium</strong>' +
        '<tt>92.90638</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>41</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Nb</ruby>' +
        '<strong>Niobium</strong>' +
        '<tt>92.90638</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Molybdenum">' +
        '<a href="' + link +'Molybdenum">' +
        '<ruby>' +
        '<rt>42</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mo</ruby>' +
        '<strong>Molybdenum</strong>' +
        '<tt>95.94</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>42</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mo</ruby>' +
        '<strong>Molybdenum</strong>' +
        '<tt>95.94</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Technetium">' +
        '<a href="' + link +'Technetium">' +
        '<ruby>' +
        '<rt>43</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Tc</ruby>' +
        '<strong>Technetium</strong>' +
        '<tt>98.9072</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>43</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Tc</ruby>' +
        '<strong>Technetium</strong>' +
        '<tt>98.9072</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Ruthenium">' +
        '<a href="' + link +'Ruthenium">' +
        '<ruby>' +
        '<rt>44</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ru</ruby>' +
        '<strong>Ruthenium</strong>' +
        '<tt>101.07</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>44</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ru</ruby>' +
        '<strong>Ruthenium</strong>' +
        '<tt>101.07</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Rhodium">' +
        '<a href="' + link +'Rhodium">' +
        '<ruby>' +
        '<rt>45</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rh</ruby>' +
        '<strong>Rhodium</strong>' +
        '<tt>102.9055</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>45</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rh</ruby>' +
        '<strong>Rhodium</strong>' +
        '<tt>102.9055</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Palladium">' +
        '<a href="' + link +'Palladium">' +
        '<ruby>' +
        '<rt>46</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pd</ruby>' +
        '<strong>Palladium</strong>' +
        '<tt>106.42</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>46</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pd</ruby>' +
        '<strong>Palladium</strong>' +
        '<tt>106.42</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Silver">' +
        '<a href="' + link +'Silver">' +
        '<ruby>' +
        '<rt>47</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ag</ruby>' +
        '<strong>Silver</strong>' +
        '<tt>107.8682</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>47</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ag</ruby>' +
        '<strong>Silver</strong>' +
        '<tt>107.8682</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Cadmium">' +
        '<a href="' + link +'Cadmium">' +
        '<ruby>' +
        '<rt>48</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cd</ruby>' +
        '<strong>Cadmium</strong>' +
        '<tt>112.411</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>48</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cd</ruby>' +
        '<strong>Cadmium</strong>' +
        '<tt>112.411</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Indium">' +
        '<a href="' + link +'Indium">' +
        '<ruby>' +
        '<rt>49</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'In</ruby>' +
        '<strong>Indium</strong>' +
        '<tt>114.818</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>49</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'In</ruby>' +
        '<strong>Indium</strong>' +
        '<tt>114.818</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Tin">' +
        '<a href="' + link +'Tin">' +
        '<ruby>' +
        '<rt>50</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sn</ruby>' +
        '<strong>Tin</strong>' +
        '<tt>118.71</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>50</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sn</ruby>' +
        '<strong>Tin</strong>' +
        '<tt>118.71</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="semi_metal" title="Antimony">' +
        '<a href="' + link +'Antimony">' +
        '<ruby>' +
        '<rt>51</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sb</ruby>' +
        '<strong>Autimony</strong>' +
        '<tt>121.760</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>51</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sb</ruby>' +
        '<strong>Autimony</strong>' +
        '<tt>121.760</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="semi_metal" title="Tellurium">' +
        '<a href="' + link +'Tellurium">' +
        '<ruby>' +
        '<rt>52</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Te</ruby>' +
        '<strong>Tellurium</strong>' +
        '<tt>127.6</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>52</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Te</ruby>' +
        '<strong>Tellurium</strong>' +
        '<tt>127.6</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="halogen" title="Iodine">' +
        '<a href="' + link +'Iodine">' +
        '<ruby>' +
        '<rt>53</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'I</ruby>' +
        '<strong>Iodine</strong>' +
        '<tt>126.90447</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>53</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'I</ruby>' +
        '<strong>Iodine</strong>' +
        '<tt>126.90447</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="noble_gas" title="Xenon">' +
        '<a href="' + link +'Xenon">' +
        '<ruby>' +
        '<rt>54</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Xe</ruby>' +
        '<strong>Xenon</strong>' +
        '<tt>131.29</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>54</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Xe</ruby>' +
        '<strong>Xenon</strong>' +
        '<tt>131.29</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th><p>6</p></th>'+
        '<td class="alkali_metal" title="Tungsten">' +
        '<a href="' + link +'Tungsten">' +
        '<ruby>' +
        '<rt>55</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cs</ruby>' +
        '<strong>Tungsten</strong>' +
        '<tt>132.90543</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>55</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cs</ruby>' +
        '<strong>Tungsten</strong>' +
        '<tt>132.90543</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="alkaline_earth" title="Barium">' +
        '<a href="' + link +'Barium">' +
        '<ruby>' +
        '<rt>56</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ba</ruby>' +
        '<strong>Barium</strong>' +
        '<tt>137.327</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>56</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ba</ruby>' +
        '<strong>Barium</strong>' +
        '<tt>137.327</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide">57-71</td>' +
        '<td class="transition_metal" title="Hafnium">' +
        '<a href="' + link +'Hafnium">' +
        '<ruby>' +
        '<rt>72</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Hf</ruby>' +
        '<strong>Hafnium</strong>' +
        '<tt>178.49</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>72</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Hf</ruby>' +
        '<strong>Hafnium</strong>' +
        '<tt>178.49</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Tantalum">' +
        '<a href="' + link +'Tantalum">' +
        '<ruby>' +
        '<rt>73</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ta</ruby>' +
        '<strong>Tantalum</strong>' +
        '<tt>180.9479</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>73</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ta</ruby>' +
        '<strong>Tantalum</strong>' +
        '<tt>180.9479</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Tungsten">' +
        '<a href="' + link +'Tungsten">' +
        '<ruby>' +
        '<rt>74</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'W</ruby>' +
        '<strong>Tungsten</strong>' +
        '<tt>183.84</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>74</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'W</ruby>' +
        '<strong>Tungsten</strong>' +
        '<tt>183.84</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Rhenium">' +
        '<a href="' + link +'Rhenium">' +
        '<ruby>' +
        '<rt>75</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Re</ruby>' +
        '<strong>Rhenium</strong>' +
        '<tt>186.207</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>75</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Re</ruby>' +
        '<strong>Rhenium</strong>' +
        '<tt>186.207</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Osmium">' +
        '<a href="' + link +'Osmium">' +
        '<ruby>' +
        '<rt>76</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Os</ruby>' +
        '<strong>Osmium</strong>' +
        '<tt>190.23</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>76</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Os</ruby>' +
        '<strong>Osmium</strong>' +
        '<tt>190.23</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Iridium">' +
        '<a href="' + link +'Iridium">' +
        '<ruby>' +
        '<rt>77</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ir</ruby>' +
        '<strong>Iridium</strong>' +
        '<tt>192.22</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>77</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ir</ruby>' +
        '<strong>Iridium</strong>' +
        '<tt>192.22</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Platinum">' +
        '<a href="' + link +'Platinum">' +
        '<ruby>' +
        '<rt>78</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pt</ruby>' +
        '<strong>Platinum</strong>' +
        '<tt>195.08</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>78</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pt</ruby>' +
        '<strong>Platinum</strong>' +
        '<tt>195.08</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Gold">' +
        '<a href="' + link +'Gold">' +
        '<ruby>' +
        '<rt>79</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Au</ruby>' +
        '<strong>Gold</strong>' +
        '<tt>196.9665</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>79</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Au</ruby>' +
        '<strong>Gold</strong>' +
        '<tt>196.9665</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Hydrargyrum(Mercury)">' +
        '<a href="' + link +'Mercury_(element)">' +
        '<ruby>' +
        '<rt>80</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Hg</ruby>' +
        '<strong>Mercury</strong>' +
        '<tt>200.59</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>80</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Hg</ruby>' +
        '<strong>Mercury</strong>' +
        '<tt>200.59</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Thallium">' +
        '<a href="' + link +'Thallium">' +
        '<ruby>' +
        '<rt>81</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ti</ruby>' +
        '<strong>Thallium</strong>' +
        '<tt>204.3833</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>81</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ti</ruby>' +
        '<strong>Thallium</strong>' +
        '<tt>204.3833</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Lead">' +
        '<a href="' + link +'Lead">' +
        '<ruby>' +
        '<rt>82</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pb</ruby>' +
        '<strong>Lead</strong>' +
        '<tt>207.2</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>82</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pb</ruby>' +
        '<strong>Lead</strong>' +
        '<tt>207.2</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Bismuth">' +
        '<a href="' + link +'Bismuth">' +
        '<ruby>' +
        '<rt>83</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Bi</ruby>' +
        '<strong>Bismuth</strong>' +
        '<tt>208.98037</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>83</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Bi</ruby>' +
        '<strong>Bismuth</strong>' +
        '<tt>208.98037</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="semi_metal" title="Polonium">' +
        '<a href="' + link +'Polonium">' +
        '<ruby>' +
        '<rt>84</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Po</ruby>' +
        '<strong>Polonium</strong>' +
        '<tt><q class="square">208.9824</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>84</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Po</ruby>' +
        '<strong>Polonium</strong>' +
        '<tt><q class="square">208.9824</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="halogen" title="Astatine">' +
        '<a href="' + link +'Astatine">' +
        '<ruby>' +
        '<rt>85</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'At</ruby>' +
        '<strong>Astatine</strong>' +
        '<tt>209.9871</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>85</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'At</ruby>' +
        '<strong>Astatine</strong>' +
        '<tt>209.9871</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="noble_gas" title="Radon">' +
        '<a href="' + link +'Radon">' +
        '<ruby>' +
        '<rt>86</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ru</ruby>' +
        '<strong>Radon</strong>' +
        '<tt>222.0176</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>86</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ru</ruby>' +
        '<strong>Radon</strong>' +
        '<tt>222.0176</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th><p>7</p></th>'+
        '<td class="alkali_metal" title="Francium">' +
        '<a href="' + link +'Francium">' +
        '<ruby>' +
        '<rt>87</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fr</ruby>' +
        '<strong>Francium</strong>' +
        '<tt>223.0197</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>87</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fr</ruby>' +
        '<strong>Francium</strong>' +
        '<tt>223.0197</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="alkaline_earth" title="Radium">' +
        '<a href="' + link +'Radium">' +
        '<ruby>' +
        '<rt>88</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ra</ruby>' +
        '<strong>Radium</strong>' +
        '<tt>226.0254</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>88</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ra</ruby>' +
        '<strong>Radium</strong>' +
        '<tt>226.0254</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide">89-103</td>' +
        '<td class="transition_metal" title="Rutherfordium">' +
        '<a href="' + link +'Rutherfordium">' +
        '<ruby>' +
        '<rt>104</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rf</ruby>' +
        '<strong>Rutherfordium</strong>' +
        '<tt><q class="square">261</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>104</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rf</ruby>' +
        '<strong>Rutherfordium</strong>' +
        '<tt><q class="square">261</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Dubnium">' +
        '<a href="' + link +'Dubnium">' +
        '<ruby>' +
        '<rt>105</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Db</ruby>' +
        '<strong>Dubnium</strong>' +
        '<tt><q class="square">262</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>105</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Db</ruby>' +
        '<strong>Dubnium</strong>' +
        '<tt><q class="square">262</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Seaborgium">' +
        '<a href="' + link +'Seaborgium">' +
        '<ruby>' +
        '<rt>106</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sg</ruby>' +
        '<strong>Seaborgium</strong>' +
        '<tt><q class="square">266</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>106</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sg</ruby>' +
        '<strong>Seaborgium</strong>' +
        '<tt><q class="square">266</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Bohrium">' +
        '<a href="' + link +'Bohrium">' +
        '<ruby>' +
        '<rt>107</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Bh</ruby>' +
        '<strong>Bohrium</strong>' +
        '<tt><q class="square">264</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>107</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Bh</ruby>' +
        '<strong>Bohrium</strong>' +
        '<tt><q class="square">264</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Hassium">' +
        '<a href="' + link +'Hassium">' +
        '<ruby>' +
        '<rt>108</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Hs</ruby>' +
        '<strong>Hassium</strong>' +
        '<tt><q class="square">269</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>108</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Hs</ruby>' +
        '<strong>Hassium</strong>' +
        '<tt><q class="square">269</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Meitnerium">' +
        '<a href="' + link +'Meitnerium">' +
        '<ruby>' +
        '<rt>109</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mt</ruby>' +
        '<strong>Meitnerium</strong>' +
        '<tt><q class="square">268</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>109</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Mt</ruby>' +
        '<strong>Meitnerium</strong>' +
        '<tt><q class="square">268</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Darmstadtium">' +
        '<a href="' + link +'Darmstadtium">' +
        '<ruby>' +
        '<rt>110</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ds</ruby>' +
        '<strong>Darmstadtium</strong>' +
        '<tt><q class="square">262</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>110</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ds</ruby>' +
        '<strong>Darmstadtium</strong>' +
        '<tt><q class="square">262</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Roentgenium">' +
        '<a href="' + link +'Roentgenium">' +
        '<ruby>' +
        '<rt>111</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rg</ruby>' +
        '<strong>Roentgenium</strong>' +
        '<tt><q class="square">272</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>111</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Rg</ruby>' +
        '<strong>Roentgenium</strong>' +
        '<tt><q class="square">272</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="transition_metal" title="Copernicium">' +
        '<a href="' + link +'Copernicium">' +
        '<ruby>' +
        '<rt>112</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cn</ruby>' +
        '<strong>Copernicium</strong>' +
        '<tt><q class="square">277</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>112</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cn</ruby>' +
        '<strong>Copernicium</strong>' +
        '<tt><q class="square">277</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Ununtrium">' +
        '<a href="' + link +'Ununtrium">' +
        '<ruby>' +
        '<rt>113</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Uut</ruby>' +
        '<strong>Ununtrium</strong>' +
        '<tt><q class="square">286</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>113</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Uut</ruby>' +
        '<strong>Ununtrium</strong>' +
        '<tt><q class="square">286</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Flerovium">' +
        '<a href="' + link +'Flerovium">' +
        '<ruby>' +
        '<rt>114</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fl</ruby>' +
        '<strong>Flerovium</strong>' +
        '<tt><q class="square">289</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>114</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fl</ruby>' +
        '<strong>Flerovium</strong>' +
        '<tt><q class="square">289</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Ununpentium">' +
        '<a href="' + link +'Ununpentium">' +
        '<ruby>' +
        '<rt>115</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Uup</ruby>' +
        '<strong>Ununpentium</strong>' +
        '<tt><q class="square">288</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>115</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Uup</ruby>' +
        '<strong>Ununpentium</strong>' +
        '<tt><q class="square">288</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="basic_metal" title="Livermorium">' +
        '<a href="' + link +'Livermorium">' +
        '<ruby>' +
        '<rt>116</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Lv</ruby>' +
        '<strong>Livermorium</strong>' +
        '<tt><q class="square">293</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>116</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Lv</ruby>' +
        '<strong>Livermorium</strong>' +
        '<tt><q class="square">293</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="halogen" title="Ununseptium">' +
        '<a href="' + link +'Ununseptium">' +
        '<ruby>' +
        '<rt>117</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Uus</ruby>' +
        '<strong>Ununseptium</strong>' +
        '<tt>294</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>117</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Uus</ruby>' +
        '<strong>Ununseptium</strong>' +
        '<tt>294</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="noble_gas" title="Ununoctium">' +
        '<a href="' + link +'Ununoctium">' +
        '<ruby>Uuo' +
        '<rt>118</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        '</ruby>' +
        '<strong>Ununoctium</strong>' +
        '<tt>294</tt>' +
        '</a>' +
        '</td>' +
        '</tr>';
    tfoot.innerHTML = 
        '<tr>' +
        '<td colspan="2" class="no_border"></td>' +
        '<td class="lanthanide" title="Lanthanum">' +
        '<a href="' + link +'Lanthanum">' +
        '<ruby>' +
        '<rt>57</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'La</ruby>' +
        '<strong>Lanthanum</strong>' +
        '<tt>138.9055</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>57</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'La</ruby>' +
        '<strong>Lanthanum</strong>' +
        '<tt>138.9055</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Cerium">' +
        '<a href="' + link +'Cerium">' +
        '<ruby>' +
        '<rt>58</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ce</ruby>' +
        '<strong>Cerium</strong>' +
        '<tt>140.115</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>58</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ce</ruby>' +
        '<strong>Cerium</strong>' +
        '<tt>140.115</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Praseodymium">' +
        '<a href="' + link +'Praseodymium">' +
        '<ruby>' +
        '<rt>59</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pr</ruby>' +
        '<strong>Praseodymium</strong>' +
        '<tt>140.90765</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>59</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pr</ruby>' +
        '<strong>Praseodymium</strong>' +
        '<tt>140.90765</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Neodymium">' +
        '<a href="' + link +'Neodymium">' +
        '<ruby>' +
        '<rt>60</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Nd</ruby>' +
        '<strong>Neodymium</strong>' +
        '<tt>140.24</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>60</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Nd</ruby>' +
        '<strong>Neodymium</strong>' +
        '<tt>140.24</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Promethium">' +
        '<a href="' + link +'Promethium">' +
        '<ruby>' +
        '<rt>61</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pm</ruby>' +
        '<strong>Promethium</strong>' +
        '<tt>144.9127</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>61</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pm</ruby>' +
        '<strong>Promethium</strong>' +
        '<tt>144.9127</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Samarium">' +
        '<a href="' + link +'Samarium">' +
        '<ruby>' +
        '<rt>62</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sm</ruby>' +
        '<strong>Samarium</strong>' +
        '<tt>150.36</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>62</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Sm</ruby>' +
        '<strong>Samarium</strong>' +
        '<tt>150.36</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Europium">' +
        '<a href="' + link +'Europium">' +
        '<ruby>' +
        '<rt>63</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Eu</ruby>' +
        '<strong>Europium</strong>' +
        '<tt>151.9655</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>63</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Eu</ruby>' +
        '<strong>Europium</strong>' +
        '<tt>151.9655</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Gadolinium">' +
        '<a href="' + link +'Gadolinium">' +
        '<ruby>' +
        '<rt>64</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Gd</ruby>' +
        '<strong>Gadolinium</strong>' +
        '<tt>157.25</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>64</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Gd</ruby>' +
        '<strong>Gadolinium</strong>' +
        '<tt>157.25</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Terbium">' +
        '<a href="' + link +'Terbium">' +
        '<ruby>' +
        '<rt>65</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Tb</ruby>' +
        '<strong>Terbium</strong>' +
        '<tt>158.92534</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>65</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Tb</ruby>' +
        '<strong>Terbium</strong>' +
        '<tt>158.92534</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Dysprosium">' +
        '<a href="' + link +'Dysprosium">' +
        '<ruby>' +
        '<rt>66</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Dy</ruby>' +
        '<strong>Dysprosium</strong>' +
        '<tt>162.50</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>66</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Dy</ruby>' +
        '<strong>Dysprosium</strong>' +
        '<tt>162.50</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Holmium">' +
        '<a href="' + link +'Holmium">' +
        '<ruby>' +
        '<rt>67</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ho</ruby>' +
        '<strong>Holmium</strong>' +
        '<tt>164.93032</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>67</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ho</ruby>' +
        '<strong>Holmium</strong>' +
        '<tt>164.93032</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Erbium">' +
        '<a href="' + link +'Erbium">' +
        '<ruby>' +
        '<rt>68</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Er</ruby>' +
        '<strong>Erbium</strong>' +
        '<tt>167.26</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>68</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Er</ruby>' +
        '<strong>Erbium</strong>' +
        '<tt>167.26</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Thulium">' +
        '<a href="' + link +'Thulium">' +
        '<ruby>' +
        '<rt>69</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Tm</ruby>' +
        '<strong>Thulium</strong>' +
        '<tt>168.93421</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>69</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Tm</ruby>' +
        '<strong>Thulium</strong>' +
        '<tt>168.93421</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Ytterbium">' +
        '<a href="' + link +'Ytterbium">' +
        '<ruby>' +
        '<rt>70</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Yb</ruby>' +
        '<strong>Ytterbium</strong>' +
        '<tt>173.04</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>70</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Yb</ruby>' +
        '<strong>Ytterbium</strong>' +
        '<tt>173.04</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="lanthanide" title="Lutetium">' +
        '<a href="' + link +'Lutetium">' +
        '<ruby>' +
        '<rt>71</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Lu</ruby>' +
        '<strong>Lutetium</strong>' +
        '<tt>174.967</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>71</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Lu</ruby>' +
        '<strong>Lutetium</strong>' +
        '<tt>174.967</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2" class="no_border"></td>' +
        '<td class="actinide" title="Actinium">' +
        '<a href="' + link +'Actinium">' +
        '<ruby>' +
        '<rt>89</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ac</ruby>' +
        '<strong>Actinium</strong>' +
        '<tt>227.0278</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>89</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Ac</ruby>' +
        '<strong>Actinium</strong>' +
        '<tt>227.0278</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Thorium">' +
        '<a href="' + link +'Thorium">' +
        '<ruby>' +
        '<rt>90</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Th</ruby>' +
        '<strong>Thorium</strong>' +
        '<tt>232.0381</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>90</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Th</ruby>' +
        '<strong>Thorium</strong>' +
        '<tt>232.0381</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Protactinium">' +
        '<a href="' + link +'Protactinium">' +
        '<ruby>' +
        '<rt>91</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pa</ruby>' +
        '<strong>Protactinium</strong>' +
        '<tt>231.03588</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>91</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pa</ruby>' +
        '<strong>Protactinium</strong>' +
        '<tt>231.03588</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Uranium">' +
        '<a href="' + link +'Uranium">' +
        '<ruby>' +
        '<rt>92</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'U</ruby>' +
        '<strong>Uranium</strong>' +
        '<tt>238.0289</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>92</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'U</ruby>' +
        '<strong>Uranium</strong>' +
        '<tt>238.0289</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Neptunium">' +
        '<a href="' + link +'Neptunium">' +
        '<ruby>' +
        '<rt>93</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Np</ruby>' +
        '<strong>Neptunium</strong>' +
        '<tt>237.0482</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>93</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Np</ruby>' +
        '<strong>Neptunium</strong>' +
        '<tt>237.0482</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Plutonium">' +
        '<a href="' + link +'Plutonium">' +
        '<ruby>' +
        '<rt>94</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pu</ruby>' +
        '<strong>Plutonium</strong>' +
        '<tt>244.0642</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>94</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Pu</ruby>' +
        '<strong>Plutonium</strong>' +
        '<tt>244.0642</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Americium">' +
        '<a href="' + link +'Americium">' +
        '<ruby>' +
        '<rt>95</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Am</ruby>' +
        '<strong>Americium</strong>' +
        '<tt>243.0614</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>95</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Am</ruby>' +
        '<strong>Americium</strong>' +
        '<tt>243.0614</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Curium">' +
        '<a href="' + link +'Curium">' +
        '<ruby>' +
        '<rt>96</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cm</ruby>' +
        '<strong>Curium</strong>' +
        '<tt>247.0703</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>96</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cm</ruby>' +
        '<strong>Curium</strong>' +
        '<tt>247.0703</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Berkelium">' +
        '<a href="' + link +'Berkelium">' +
        '<ruby>' +
        '<rt>97</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Bk</ruby>' +
        '<strong>Berkelium</strong>' +
        '<tt>247.0103</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>97</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Bk</ruby>' +
        '<strong>Berkelium</strong>' +
        '<tt>247.0103</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Californium">' +
        '<a href="' + link +'Californium">' +
        '<ruby>' +
        '<rt>98</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cf</ruby>' +
        '<strong>Californium</strong>' +
        '<tt><q class="square">254</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>98</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Cf</ruby>' +
        '<strong>Californium</strong>' +
        '<tt><q class="square">254</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Einsteinium">' +
        '<a href="' + link +'Einsteinium">' +
        '<ruby>' +
        '<rt>99</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Es</ruby>' +
        '<strong>Einsteinium</strong>' +
        '<tt>257.09651</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>99</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Es</ruby>' +
        '<strong>Einsteinium</strong>' +
        '<tt>257.09651</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Fermium">' +
        '<a href="' + link +'Fermium">' +
        '<ruby>' +
        '<rt>100</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fm</ruby>' +
        '<strong>Fermium</strong>' +
        '<tt>247.0951</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>100</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Fm</ruby>' +
        '<strong>Fermium</strong>' +
        '<tt>247.0951</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Mendelevium">' +
        '<a href="' + link +'Mendelevium">' +
        '<ruby>' +
        '<rt>101</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Md</ruby>' +
        '<strong>Mendelevium</strong>' +
        '<tt>258.1</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>101</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Md</ruby>' +
        '<strong>Mendelevium</strong>' +
        '<tt>258.1</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Nobelium">' +
        '<a href="' + link +'Nobelium">' +
        '<ruby>' +
        '<rt>102</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'No</ruby>' +
        '<strong>Nobelium</strong>' +
        '<tt>259.1009</tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>102</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'No</ruby>' +
        '<strong>Nobelium</strong>' +
        '<tt>259.1009</tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '<td class="actinide" title="Lawrencium">' +
        '<a href="' + link +'Lawrencium">' +
        '<ruby>' +
        '<rt>103</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Lr</ruby>' +
        '<strong>Lawrencium</strong>' +
        '<tt><q class="square">262</q></tt>' +
        '</a>' +
        '<div>' +
        '<ruby>' +
        '<rt>103</rt>' +
        '<rp>&amp;NoBrowser;</rp>' +
        'Lr</ruby>' +
        '<strong>Lawrencium</strong>' +
        '<tt><q class="square">262</q></tt>' +
        '<hr class="hr1" />' +
        '<hr class="hr2" />' +
        '<hr class="hr3" />' +
        '<hr class="hr4" />' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="5" class="no_border"></td>' +
        '<td class="alkali_metal last_tr">' +
        '<a href="Alkali_metal">Alkali <br/>Metal</a>' +
        '</td>' +
        '<td class="alkaline_earth last_tr">' +
        '<a href="Alkali_earth">Alkaline <br/>Earth</a>' +
        '</td>' +
        '<td class="transition_metal last_tr">' +
        '<a href="Transition_metal">Transition <br/>Metal</a>' +
        '</td>' +
        '<td class="basic_metal last_tr">' +
        '<a href="Basic_metal">Basic<br/>Metal</a>' +
        '</td>' +
        '<td class="semi_metal last_tr">' +
        '<a href="Semimetal">Semimetal</a>' +
        '</td>' +
        '<td class="nonmetal last_tr">' +
        '<a href="Nonmetal">Nonmetal</a>' +
        '</td>' +
        '<td class="halogen last_tr">' +
        '<a href="Halogen">Halogen</a>' +
        '</td>' +
        '<td class="noble_gas last_tr">' +
        '<a href="Noble_gas">Noble<br/>Gas</a>' +
        '</td>' +
        '<td class="lanthanide last_tr">' +
        '<a href="Lathanide">Lanthanide</a>' +
        '</td>' +
        '<td class="actinide last_tr">' +
        '<a href="Actinide">Actinide</a>' +
        '</td>' +
        '</tr>';
    table.appendChild(caption);
    table.appendChild(tbody);
    table.appendChild(tfoot);
    main.appendChild(table);
    main.setAttribute('title', 'Periodic Table of The Elements');
    document.body.appendChild(main);
}